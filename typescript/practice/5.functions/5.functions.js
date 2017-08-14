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
var myAdd = function (x, y) { return x + y; };
/**
 * ###########################################################
 * ###################### Function Types ######################
 * ###########################################################
 */
/**
 * Typing the function
 */
function add2(x, y) {
    return x + y;
}
var myAdd2 = function (x, y) { return x + y; };
var myAdd3 = function (x, y) {
    return x + y;
};
/**
 * Inferring the types - Contextual typing
 */
var myAdd4 = function (x, y) { return x + y; };
/**
 * ###########################################################
 * ########### Optional and Default Parameters ###############
 * ###########################################################
 */
function buildName(firstName, lastName) {
    return firstName + " " + lastName;
}
//let result1 = buildName("Bob");                  // error, too few parameters
//let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
var result3 = buildName("Bob", "Adams"); // ah, just right
function buildName2(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result12 = buildName2("Bob"); // works correctly now
//let result22 = buildName2("Bob", "Adams", "Sr.");  // error, too many parameters
var result32 = buildName2("Bob", "Adams"); // ah, just right
function buildName3(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
var result13 = buildName3("Bob"); // works correctly now, returns "Bob Smith"
var result23 = buildName3("Bob", undefined); // still works, also returns "Bob Smith"
//let result33 = buildName3("Bob", "Adams", "Sr.");  // error, too many parameters
var result43 = buildName3("Bob", "Adams"); // ah, just right
/**
 * ###########################################################
 * ################  Rest Parameters ######################
 * ###########################################################
 */
function buildName4(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + restOfName.join(' ');
}
var buildNameFun = buildName4;
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
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
/**
 * Even better, TypeScript will warn you when you make this mistake if you pass
 * the --noImplicitThis flag to the compiler. It will point out that this in this.suits[pickedSuit]
 * is of type any.
 */
var deck2 = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker2 = deck.createCardPicker();
var pickedCard2 = cardPicker();
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
var deck3 = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker3 = deck.createCardPicker();
var pickedCard3 = cardPicker();
console.log("card: " + pickedCard3.card + " of " + pickedCard3.suit);
/**
 * Concept- this parameters in callbacks
 */
/**
 * Concept- Overloads
 */
var suits = ["hearts", "spades", "clubs", "diamonds"];
//Implementation
function pickCard4(x) {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        var pickedCard5 = Math.floor(Math.random() * x.length);
        return pickedCard5;
    }
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
    return {};
}
