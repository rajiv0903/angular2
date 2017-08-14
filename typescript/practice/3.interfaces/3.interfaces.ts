/**
 * ###########################################################
 * ###################### Intefaces ######################
 * ###########################################################
 */

/**
 * Duck Typing or Structural Typing - 
 * Interface is powerful way of defining contracts within the code 
 * as well as contracts with code outside of the project
 * 
 * In case of interface the shape is matter 
 */

interface LabelledValue{
    label: string;
}
function printLabel(labelledObj : LabelledValue) {
    console.log(labelledObj.label); //Type completion feature 
    //console.log(labelledObj.a); //error as a is not property declared
}
let myObj = {size: 10, label: 'Size 10 object!'};
printLabel(myObj);

/**
 * ###########################################################
 * ###################### Optional Properties ###################
 * ###########################################################
 */
/**
 * Shopping Bags - Not mandatory all stuffs has to be there from shop
 */
interface SquareConfig{
    color?  :   string;
    width?  :   number;
}
//Note: We define a new type for the return having color and arear
function createSquare(config: SquareConfig) : {color: string;  area: number;} 
{
    let newSquere = {color: 'white', area: 100};
    //calculate from passing config - both color and width optional
    if(config.color) {
        newSquere.color = config.color;
    }
    if(config.width){
        newSquere.area = Math.pow(config.width, 2);
    }
    return newSquere; //it will give error unless we do not declare color and arear
}

/**
 * ###########################################################
 * #################### Readonly Properties ###################
 * ###########################################################
 */
/**
 * Useful to make immutable object
 * Some properties should only be modifiable when an object is first created. 
 * You can specify this by putting readonly before the name of the property
 */

interface Point {
    readonly x: number;
    readonly y: number;
}
let p1 :Point = {x: 10, y: 20};
//p1.x = 5; //error!

/**
 * ###########################################################
 * #################### Readonly Array ###################
 * ###########################################################
 */
/**
 * ReadonlyArray<T> same as Array<T> with all mutating methods removed, 
 * so you can make sure you don’t change your arrays after creation
 */
let a: number[] = [1, 2, 3];
a.length = 3; //It's okay 
let ro: ReadonlyArray<number> = a; 
//ro.length = 3; //error!
//ro[0] = 1; //error!
//ro.push(5); // error!
//a = ro; // error!

/**
 * ReadonlyArray back to a normal array is illegal.
 *  You can still override it with a type assertion
 */
a = ro as number[];

/**
 * ###########################################################
 * #################### Readonly Vs Const ###################
 * ###########################################################
 */
/**
 * The easiest way to remember whether to use readonly or const is to ask 
 * whether you’re using it on a variable or a property. Variables use const 
 * whereas properties use readonly.
 */


/**
 * ###########################################################
 * #################### Excess Property Checks ###################
 * ###########################################################
 */
interface SquareConfigExcessProp {
    color?: string;
    width?: number;
    [propName: string]: any;
}
function createSquare2(config: SquareConfigExcessProp) : void{

}
let squareOptions = { colour: "red", width: 100 };
let mySquare = createSquare2(squareOptions);

/**
 * ###########################################################
 * #################### Function Types ###################
 * ###########################################################
 */
/**
 * To describe a function type with an interface, we give the interface 
 * a call signature. This is like a function declaration with only the 
 * parameter list and return type given. Each parameter in the parameter 
 * list requires both name and type.
 */
interface SearchFunc {
    (source: string, subString: string) : boolean;
}
let mySearch: SearchFunc;
mySearch = function(src: string, sub: string) {
    let result = src.search(sub);
    return result > -1;
}

/**
 * ###########################################################
 * #################### Indexable Types ###################
 * ###########################################################
 */
/**
 * This index signature states that when a StringArray is indexed with a number, 
 * it will return a string.
 */
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

/**
 * ###########################################################
 * ################ Readonly String Array  ###################
 * ###########################################################
 */
interface ReadonlyStringArray {
    readonly [index: number] : string;
}
let myArray2: ReadonlyStringArray = ["Alice", "Bob"];
//myArray2[2] = "Mallory"; // error!

interface NumberDictionary {
    [index: string]: number;
    length: number;    // ok, length is a number
   // name: string;      // error, the type of 'name' is not a subtype of the indexer
}



/**
 * ###########################################################
 * ################     Class Types        ###################
 * ###########################################################
 */
/**
 * Implementing an interface
 */
interface ClockInterface {
    currentTime : Date; //property declaration
    setTime(d: Date): void; //method declaration
}

class Clock implements ClockInterface{
    currentTime : Date;
    setTime (d: Date) : void {
        this.currentTime = d;
    }
    constructor (h: number, m: number) {}
}

let clockObj : Clock = new Clock(1, 2);


/**
 * ###########################################################
 * ##########  Extending Interfaces        ###################
 * ###########################################################
 */
interface Shape {
    color: string; 
}
interface PenStroke {
    penWidth: number; 
}
interface Square extends Shape, PenStroke {
    sideLength : number; 
}

let square = <Square> {};
square.color = 'Blue';
square.sideLength = 10;
square.penWidth = 5.0;

/**
 * ###########################################################
 * ####  Static and Instance Sides of Class ###################
 * ###########################################################
 */

/**
 * Difference between the static and instance sides of classes
 * When working with classes and interfaces, it helps to keep in mind that 
 * a class has two types: the type of the static side and the type of the 
 * instance side. You may notice that if you create an interface with a 
 * construct signature and try to create a class that implements this interface 
 * you get an error:
 * 
 * This is because when a class implements an interface, only the instance 
 * side of the class is checked. Since the constructor sits in the static side, 
 * it is not included in this check.
 * 
 * Instead, you would need to work with the static side of the class directly. 
 * In this example, we define two interfaces, ClockConstructor for the 
 * constructor and ClockInterface for the instance methods. Then for 
 * convenience we define a constructor function createClock that creates 
 * instances of the type that is passed to it.
 */

//Error! 
// interface ClockConstructor2 {
//     new (hour: number, minute: number);
// }
//Error!
// class Clock2 implements ClockConstructor2 {
//     currentTime: Date;
//     constructor(h: number, m: number) { }
// }

interface ClockConstructor2 {
    new (hour: number, minute: number): ClockInterface2;
}
interface ClockInterface2{
    tick();
}
function createClock(ctor: ClockConstructor2, hour: number, minute: number) : ClockInterface2
{
    return new ctor (hour, minute);
}
class DigitalClock implements ClockInterface2 {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface2 {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
console.log(digital.tick());
console.log(analog.tick());


/**
 * ###########################################################
 * ##########  Interfaces Extending Classes ###################
 * ###########################################################
 */

/**
 * it inherits the members of the class but not their implementations. 
 * It is as if the interface had declared all of the members of the class 
 * without providing an implementation. Interfaces inherit even the private and protected 
 * members of a base class
 */
//Effectively, a SelectableControl acts like a Control that is known to have a select method
class Control {
    private state: any;
}
interface SelectableControl extends Control {
    select(): void;
}
class Button extends Control {
    select() { }
}
class TextBox extends Control {
    select() { }
}
class Image2 {
    select() { }
}
class Location2 {
    select() { }
}