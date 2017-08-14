/**
 * ###########################################################
 * ###################### Generics ######################
 * ###########################################################
 */

/**
 * Simple Generics
 */
function identity1(arg: number): number {
    return arg;
}

function identity2(arg: any): any {
    return arg;
}

/**
 * We need a way of capturing the type of the argument in such a way that we can also use it to denote what is being returned. 
 * Here, we will use a type variable, a special kind of variable that works on types rather than values
 */
function identityG <T> (arg: T): T {
    return arg;
}

//type argument inference
let output = identityG<string>("myString");  // type of output will be 'string'

function loggingIdentity<T>(arg: T): T {
    //console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}

function loggingIdentity2<T> (arg: (T[] | Array<T>) ): (T[] | Array<T>){
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}

/**
 * ###########################################################
 * ###################### Generic Types ######################
 * ###########################################################
 */

function  identityGType<T> (arg: T) : T {
    return arg;
}
let myIdentity1: <T>(x: T) => T = identityGType;
let myIdentity2: {<U> (y: U) : U} = identityGType;

/**
 * ###########################################################
 * ###################### Generic Interface ###################
 * ###########################################################
 */
interface GenericIdentityFn {
    <U> (arg: U ): U;
}

let myIdentity: GenericIdentityFn = identityGType;


interface GenericIdentityFn2<U> {
    (arg: U ): U;
}

let myIdentity3: GenericIdentityFn2<number> = identityGType;

/**
 * ###########################################################
 * ###################### Generic Classes ######################
 * ###########################################################
 */
class GenericNumber<T>{
    zeroValue: T;
    add: (x:T, y:T) => T;
}

let myGenericNumber  = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y){ return x+y};
console.log(myGenericNumber.add(myGenericNumber.zeroValue, 2));

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function(x, y) { return x + y; };

console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));

/**
 * ###########################################################
 * ###################### Generic Constraints ######################
 * ###########################################################
 */
/**
 * To enforce the generic type has certain property or not
 */
function loggingIdentity3<T>(arg: T): T {
    //console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}

interface Lengthwise {
    length: number;
}

function loggingIdentity4 <T extends Lengthwise> (arg: T): T{
    console.log (arg.length); //Okoy!!
    return arg;
}
//Call the constraint functioon
//loggingIdentity4(4); //Error!
let logging = loggingIdentity4({length: 4, value: 3});
console.log (logging.length);

/**
 * Using Type Parameters in Generic Constraints
 */

function getProperty<T, K extends keyof T> (obj: T, key: K): any {
    return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // okay
//getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

/**
 * Using Type Parameters in Generic Constraints
 */

/**
 * !(:-:)
 * When creating factories in TypeScript using generics, 
 * it is necessary to refer to class types by their constructor functions. For example,
 */

function create <T> (c: {new(): T; }): T 
{
    return new c();
}

class BeeKeeper {
    hasMask: boolean;
}
class ZooKeeper {
    nametag: string;
}
class Animal {
    numLegs: number;
}
class Bee extends Animal {
    keeper: BeeKeeper;
}
class Lion extends Animal {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal> (c: new()=> A): A{
    return new c();
}
createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!
