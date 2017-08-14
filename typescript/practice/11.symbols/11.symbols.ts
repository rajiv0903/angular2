/**
 * ###########################################################
 * ########################## Symbols #########################
 * ###########################################################
 */
/**
 * Starting with ECMAScript 2015, symbol is a primitive data type, just like number and string.
 */

/**
 * @1. symbol values are created by calling the Symbol constructor.
 * @2. Symbols are immutable, and unique.
 * @3. Just like strings, symbols can be used as keys for object properties.
 * @4. Symbols can also be combined with computed property declarations to declare object 
 *      properties and class members.
 */
let smy1 =  Symbol();
let sym2 = Symbol('Hi');

let sym3 = Symbol("key");
let sym4 = Symbol("key");
console.log(sym3 === sym4); // false, symbols are unique

let symObj = Symbol();
let obj = {
    [symObj] : "Value"
}
console.log (obj[symObj]); // "value"

const getClassNameSymbol  = Symbol();
class C{
    [getClassNameSymbol] (){
        return "C";
    }
}
let c = new C();
let className = c[getClassNameSymbol](); // "C"
console.log(className);

/**
 * Well-known Symbols
 */
/**
 * Refer - https://www.typescriptlang.org/docs/handbook/symbols.html
 */