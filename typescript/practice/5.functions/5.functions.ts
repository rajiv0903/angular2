/**
 * ###########################################################
 * ###################### Functions ######################
 * ###########################################################
 */
// Named function
function add(x, y) {
    return x + y;
}

// Anonymous function
let myAdd = function(x, y) { return x+y; };

/**
 * ###########################################################
 * ###################### Function Types ######################
 * ###########################################################
 */

/**
 * Typing the function
 */
function add2(x: number, y: number): number {
    return x + y;
}
let myAdd2 = function(x: number, y: number): number { return x+y; };

let myAdd3 : (xIndex : number, yIndex: number) => number =
    function (x: number, y: number) : number{
        return x+y;
    };

/**
 * Inferring the types - Contextual typing
 */
let myAdd4: (baseValue:number, increment:number) => number =
    function(x, y) { return x + y; };

/**
 * ###########################################################
 * ########### Optional and Default Parameters ###############
 * ###########################################################
 */
function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}
//let result1 = buildName("Bob");                  // error, too few parameters
//let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right

function buildName2(firstName: string, lastName?: string) { //Optional lastname
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result12 = buildName2("Bob");                  // works correctly now
//let result22 = buildName2("Bob", "Adams", "Sr.");  // error, too many parameters
let result32 = buildName2("Bob", "Adams");         // ah, just right

function buildName3(firstName: string, lastName = "Smith") {//default-initialized parameters
    return firstName + " " + lastName;
}
let result13 = buildName3("Bob");                  // works correctly now, returns "Bob Smith"
let result23 = buildName3("Bob", undefined);       // still works, also returns "Bob Smith"
//let result33 = buildName3("Bob", "Adams", "Sr.");  // error, too many parameters
let result43 = buildName3("Bob", "Adams");         // ah, just right

/**
 * ###########################################################
 * ################  Rest Parameters ######################
 * ###########################################################
 */
function buildName4(firstName:string, ... restOfName: string[]) :string {
    return firstName + restOfName.join(' ');
}
let buildNameFun: (fName: string, ...rest: string[]) => string = buildName4;
console.log(buildNameFun('Rajiv', 'Kumar', 'Chaudhuri'));


/**
 * ###########################################################
 * ########################  this ############################
 * ###########################################################
 */

/**
 * @1. TypeScript is superset of JavaScript
 * @2. TypeScript lets you catch incorrect uses of this with a couple of techniques 
 */

/**
 * Concept-  this and arrow functions
 * In JavaScript, this is a variable that’s set when a function is called. 
 * This makes it a very powerful and flexible feature, but it comes at the cost of 
 * always having to know about the context that a function is executing in. 
 * This is notoriously confusing, especially when returning a function or 
 * passing a function as an argument.
 */

/**
 * function created by createCardPicker will be set to window instead of our deck object. 
 * That’s because we call cardPicker() on its own. A top-level non-method syntax call like 
 * this will use window for this. (Note: under strict mode, this will be undefined rather than window).
 * We can fix this by making sure the function is bound to the correct this before we return the 
 * function to be used later. This way, regardless of how it’s later used, it will still be 
 * able to see the original deck object. To do this, we change the function expression to use 
 * the ECMAScript 6 arrow syntax. Arrow functions capture the this where the function is created 
 * rather than where it is invoked:
 */

let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function (){
        return function (){
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);


/**
 * Even better, TypeScript will warn you when you make this mistake if you pass 
 * the --noImplicitThis flag to the compiler. It will point out that this in this.suits[pickedSuit] 
 * is of type any.
 */
let deck2 = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}
let cardPicker2 = deck.createCardPicker();
let pickedCard2 = cardPicker();
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);

/**
 * Concept-  this parameters
 * Unfortunately, the type of this.suits[pickedSuit] is still any. 
 * That’s because this comes from the function expression inside the object literal. 
 * To fix this, you can provide an explicit this parameter. this parameters are 
 * fake parameters that come first in the parameter list of a function:
 */
/**
 * Now TypeScript knows that createCardPicker expects to be called on a Deck object. 
 * That means that this is of type Deck now, not any, so --noImplicitThis will not cause any errors.
 */
interface Card {
    suit: string;
    card: number; 
}
interface Deck{
    suits: string[];
    cards: number[];
    createCardPicker (this: Deck) : () => Card; 
}

let deck3: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function(this: Deck){
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker3 = deck.createCardPicker();
let pickedCard3 = cardPicker();
console.log("card: " + pickedCard3.card + " of " + pickedCard3.suit);

/**
 * Concept- this parameters in callbacks
 */




/**
 * Concept- Overloads
 */
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard4 (x:{suit:string, card:number}[]): number;
function pickCard4(x: number): {suit: string; card: number; };
//Implementation
function pickCard4(x ) : (object | number) {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard5 = Math.floor(Math.random() * x.length);
        return pickedCard5;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
    return {};
}