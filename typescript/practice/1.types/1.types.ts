/**
 * ###########################################################
 * ###################### Basic Types ######################
 * ###########################################################
 */

/**
 * ###########################################################
 * ###################### Boolean ######################
 * ###########################################################
 */

/**
 * The most basic datatype is the simple true/false value, which JavaScript and 
 * TypeScript call  a boolean value
 */

let isDone: boolean = false;


/**
 * ###########################################################
 * ###################### Number ######################
 * ###########################################################
 */
/**
 * As in JavaScript, all numbers in TypeScript are floating point values. 
 * These floating point numbers get the type number. In addition to hexadecimal 
 * and decimal literals, TypeScript also supports binary and octal literals 
 * introduced in ECMAScript 2015
 */

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

/**
 * ###########################################################
 * ###################### String ######################
 * ###########################################################
 */
let color:string = "blue";
color = 'red';

/**
 * You can also use template strings, which can span multiple lines 
 * and have embedded expressions. These strings are surrounded by the 
 * backtick/backquote (`) character, and embedded expressions are of the form ${ expr }.
 */

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.
I'll be ${ age + 1 } years old next month.`;

/**
 * ###########################################################
 * ###################### Array ######################
 * ###########################################################
 */
let list: number[] = [1, 2, 3];

//Generic Array 
let listg: Array<number> = [1, 2, 3];

/**
 * ###########################################################
 * ###################### Tuple ######################
 * ###########################################################
 */
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
//x = [10, "hello"]; // Error

console.log(x[0].substr(1)); // OK
//console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

x[3] = "world"; // OK, 'string' can be assigned to 'string | number'
console.log(x[5].toString()); // OK, 'string' and 'number' both have 'toString'
//x[6] = true; // Error, 'boolean' isn't 'string | number'

/**
 * ###########################################################
 * ###################### Enum ######################
 * ###########################################################
 */
enum Color1 {Red, Green, Blue}
let c1: Color1 = Color1.Green;

enum Color2 {Red = 1, Green, Blue}
let c2: Color2 = Color2.Green;

enum Color3 {Red = 1, Green = 2, Blue = 4}
let c3: Color3 = Color3.Green;

enum Color4 {Red = 1, Green, Blue}
let colorName: string = Color4[2];

console.log('c1:'+c1, ' c2:'+c2+ ' c3:'+c3+ ' c4:'+colorName);

/**
 * ###########################################################
 * ###################### Any ######################
 * ###########################################################
 */
let notSure1: any = 4;
notSure1 = 'May Be String';
notSure1 = true;

let notSure2: any = 4;
notSure2.ifItExists(); // okay, ifItExists might exist at runtime
notSure2.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
//prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.


let listAny: any[] = [1, true, "free"];
listAny[1] = 100;

/**
 * ###########################################################
 * ###################### Void ######################
 * ###########################################################
 */
/**
 * void is a little like the opposite of any: the absence of having any type at 
 * all. You may commonly see this as the return type of functions that do not 
 * return a value:
 */
function warnUser(): void {
    console.log("This is my warning message");
}

/**
 * Declaring variables of type void is not useful because you can only assign 
 * undefined or null to them:
 */
let unusable: void = undefined;
unusable=null;

/**
 * ###########################################################
 * ###################### Null and Undefined ######################
 * ###########################################################
 */
/**
 * In TypeScript, both undefined and null actually have their own types named 
 * undefined and null respectively. Much like void, they’re not extremely useful 
 * on their own:
 */
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
u = null;

/**
 * ###########################################################
 * ###################### Never ######################
 * ###########################################################
 */
/**
 * The never type represents the type of values that never occur. For instance, 
 * never is the return type for a function expression or an arrow function 
 * expression that always throws an exception or one that never returns; Variables 
 * also acquire the type never when narrowed by any type guards that can never be 
 * true.
 */
// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}

/**
 * ###########################################################
 * ###################### Type assertions#####################
 * ###########################################################
 */

/**
 * you know the type of some entity could be more specific than its current 
 * type
 * TypeScript with JSX, only as-style assertions are allowed
 */

let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length; //casting to string

//another way
let someValue1: any = "this is a string";
let strLength1: number = (someValue1 as string).length;