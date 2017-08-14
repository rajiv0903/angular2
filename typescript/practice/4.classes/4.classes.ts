/**
 * ###########################################################
 * ###################### Classes ######################
 * ###########################################################
 */
class Greeter{
    greeting: string;
    constructor(message: string){
        this.greeting = message;
    }
    greet(){
        return 'Hello, '+ this.greeting;
    }
}

let greeter = new Greeter('world');
console.log (greeter.greet());

/**
 * ###########################################################
 * ###################### Inheritance ######################
 * ###########################################################
 */
class Animal {
    name: string;
    constructor(name: string){
        this.name = name;
    }
    move(distanceInMeters: number = 0){ //default value as 0
        console.log (`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Snake extends Animal{
    constructor(name: string){
        super(name);
    }
    move(distanceInMeters= 5 as number){
        console.log('Slithering.....');
        super.move(distanceInMeters);
    }
}
class Horse extends Animal{
    constructor(name: string){
        super(name);
    }
    move(distanceInMeters =45 ){
        console.log('Galloping.....');
        super.move(distanceInMeters);
    }
}
let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

/**
 * ###########################################################
 * ###### Public, private, and protected modifiers ##########
 * ###########################################################
 */
//In TypeScript, each member is public by default
//When a member is marked private, it cannot be accessed from outside of its containing class. For example:
class AnimalPrivate {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

//new AnimalPrivate("Cat").name; // Error: 'name' is private;

/**
 * Understanding protected
 */
class Person{
    protected name : string;
    protected constructor (name : string){
        this.name= name;
    }
}
class Employee extends Person{
    private department: string;
    //protected 
    constructor(name: string, department: string){
        super(name);
        this.department = department;
    }
    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
//console.log(howard.name); // error


/**
 * ###########################################################
 * ################## Readonly modifier ######################
 * ###########################################################
 */

class Octopus {
    readonly name: string;
    readonly numberOfLegs : number = 8;
    constructor(name: string){
        this.name = name;
    }
}
let dad: Octopus = new Octopus('Man with the 8 strong legs');
//dad.name = 'Man with the 3-piece suit'; //Error!

/**
 * ###########################################################
 * ################## Parameter properties ######################
 * ###########################################################
 */
class Octopus2 {
    readonly numberOfLegs: number = 8;
    constructor(private readonly name: string) {
    }
    getName(): string {
       return this.name; //Even if name is not declared but we can declare using constructor
    }
}
let dad2: Octopus2 = new Octopus2('Man with the 8 strong legs');
console.log(dad2.getName());

/**
 * ###########################################################
 * ############# Accessors and  Mutator ######################
 * ###########################################################
 */
let passcode = "secret passcode";

class Employee2 {
    private _fullName: string;

    get fullName(): string{
        return this._fullName;
    }

    set fullName(name: string){
        if (passcode && passcode == "secret passcode") {
            this._fullName = name;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee2 = new Employee2();
employee2.fullName = "Bob Smith";
if (employee2.fullName) {
    console.log(employee2.fullName);
}


/**
 * ###########################################################
 * ################### Static Properties ######################
 * ###########################################################
 */
class Grid {
    static origin = {x: 0, y: 0};
}

console.log(Grid.origin.x);
console.log(Grid.origin.y);

/**
 * ###########################################################
 * ################### Abstract Classes ######################
 * ###########################################################
 */
abstract class Department {
    constructor(public name: string) { }
    printName(): void {
        console.log("Department name: " + this.name);
    }
    abstract printMeeting(): void; // must be implemented in derived classes
}
class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing"); // constructors in derived classes must call super()
    }
    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }
    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}

let department: Department; // ok to create a reference to an abstract type
//department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
//department.generateReports(); // error: method doesn't exist on declared abstract type


/**
 * ###########################################################
 * ########## Using a class as an interface ###################
 * ###########################################################
 */
class Point2 {
    x: number;
    y: number;
}
interface Point3d extends Point2 {
    z: number;
}
let point3d: Point3d = {x: 1, y: 2, z: 3};
console.log(point3d.x, point3d.y, point3d.z);