/**
 * ###########################################################
 * #################### Type Compatibility ###################
 * ###########################################################
 */
/**
 * Type compatibility in TypeScript is based on structural subtyping. 
 * Structural typing is a way of relating types based solely on their members. 
 * This is in contrast with nominal typing
 */
interface Named{
    name: string;
}
class Person1{
    name: string;
}
let p: Named;
p = new Person1(); // OK, because of structural typing

/**
 * ###########################################################
 * #################### A Note on Soundness ###################
 * ###########################################################
 */

/**
 * TypeScript’s type system allows certain operations that can’t be known at compile-time to be safe. 
 * When a type system has this property, it is said to not be “sound”. The places where TypeScript allows 
 * unsound behavior were carefully considered, and throughout this document we’ll explain where 
 * these happen and the motivating scenarios behind them.
 */

/**
 * Starting out:
 * The basic rule for TypeScript’s structural type system is that x is compatible with y if y has at 
 * least the same members as x
 */
interface Named{
    name: string;
}
let x: Named;
let y= {name: 'Alice', location:'Miami'};
x= y;

function greet(n: Named){
    console.log('Hello, '+ n.name);
}
greet(y); //I can pass y as y has name parameter 

/**
 * Comparing two functions
 */
let a= (a:number) => 0;
let b = (b:number, s:string) => 0;
b = a; //Okay as a has corresponding compatible parameter 
//a = b; //Error - as b has required second parameter which a does not have 

let items = [1, 2, 3];
// Don't force these extra parameters
items.forEach((item, index, array) => console.log(item));
items.forEach( item => console.log(item));


let x1 = () => ({name: "Alice"});
let y1 = () => ({name: "Alice", location: "Seattle"});
x1 = y1; // OK
//y1 = x1; // Error because x() lacks a location property

/**
 * Function Parameter Bivariance
 */
/**
 * When comparing the types of function parameters, assignment succeeds if either the source parameter is 
 * assignable to the target parameter, or vice versa. This is unsound because a caller might end up 
 * being given a function that takes a more specialized type, but invokes the function with a less 
 * specialized type. In practice, this sort of error is rare, and allowing this enables many common 
 * JavaScript patterns. A brief example:
 */
enum EventType{
    Mouse, 
    Keyboard
}
interface Event {timestamp: number;}
interface MouseEvent extends Event { 
    xCord: number; 
    yCord: number;
}
interface KeyEvent extends Event {keyCode: number;}

function listenEvent (eventType: EventType, handler: (n:Event) => void){
    //....
}
// Unsound, but useful and common
listenEvent(EventType.Mouse, (e:MouseEvent) => {console.log(e.xCord+','+ e.yCord)} );
// Undesirable alternatives in presence of soundness
listenEvent(EventType.Mouse, (e:Event ) => { console.log ( (<MouseEvent>e).xCord +','+ (<MouseEvent>e).yCord)  } );
listenEvent(EventType.Mouse, <(e: Event) => void>((e: MouseEvent) => console.log(e.xCord + "," + e.yCord)));

// Still disallowed (clear error). Type safety enforced for wholly incompatible types
//listenEvent(EventType.Mouse, (e: number) => console.log(e));

/**
 * Optional Parameters and Rest Parameters
 */
/**
 * When comparing functions for compatibility, optional and required parameters are interchangeable. 
 * Extra optional parameters of the source type are not an error, and optional parameters of 
 * the target type without corresponding parameters in the source type are not an error.
 */
function invokeLater ( args: any[], callback: (...args: any[])  => void) {
    /* ... Invoke callback with 'args' ... */
}
// Unsound - invokeLater "might" provide any number of arguments
invokeLater([1, 2], (x, y) => {console.log (x + ", " + y)});
// Confusing (x and y are actually required) and undiscoverable
invokeLater([1, 2],  (x?, y?) => {console.log (x + ", " + y)}   );

/**
 * Enums
 */
/**
 * Enums are compatible with numbers, and numbers are compatible with enums. 
 * Enum values from different enum types are considered incompatible. For example,
 */
enum Status { Ready, Waiting };
enum Color { Red, Blue, Green };

let status2 = Status.Ready;
//status2 = Color.Red;  //error

/**
 * Classes
 */
/**
 * Classes work similarly to object literal types and interfaces with one exception: 
 * they have both a static and an instance type. When comparing two objects of a class type, 
 * only members of the instance are compared. Static members and constructors do not affect compatibility.
 */
class Animal {
    feet: number;
    constructor(name: string, numFeet: number) { }
}
class Size {
    feet: number;
    constructor(numFeet: number) { }
}
let a1: Animal;
let s1: Size;
a1 = s1;  //OK
s1 = a1;  //OK

/**
 * Generics
 */
/**
 * Because TypeScript is a structural type system, type parameters only affect the resulting 
 * type when consumed as part of the type of a member. For example,
 */
interface Empty<T> {
}
let x2: Empty<number>;
let y2: Empty<string>;
x2 = y2;  // okay, y matches structure of x

/**
 * In the above, x and y are compatible because their structures do not use the type argument 
 * in a differentiating way. Changing this example by adding a member to Empty<T> shows how this works:
 */

interface NotEmpty<T> {
    data: T;
}
let x3: NotEmpty<number>;
let y3: NotEmpty<string>;

//x3 = y3;  // error, x and y are not compatible