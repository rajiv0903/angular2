/**
 * ###########################################################
 * ###################### Enums ######################
 * ###########################################################
 */

/**
 * Enums allow us to define a set of named numeric constants. 
 * An enum can be defined using the enum keyword.
 */

enum Direction{
    Up = 1,
    Down,
    Left,
    Right
}

console.log (Direction.Left);

enum FileAccess{
    //coinstant members
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    //computed members 
    G = "123".length
}

console.log(FileAccess.Write);
console.log(FileAccess.ReadWrite);

/**
 * Enums are real objects that exist at runtime. One reason is the ability to 
 * maintain a reverse mapping from enum values to enum names.
 */
enum Enum{
    A
}

let valueOfA = Enum.A;
let nameOfA = Enum[Enum.A]; //A

console.log(valueOfA);
console.log(nameOfA);

const enum Directions {
    Up,
    Down,
    Left,
    Right
}
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

/**
 * Ambient enums-
 * Ambient enums are used to describe the shape of already existing enum types.
 * One important difference between ambient and non-ambient enums is that, in regular enums, 
 * members that don’t have an initializer are considered constant members. 
 * For non-const ambient enums member that does not have initializer is considered computed.
 */

declare enum Enum {
    //A,
    B=1,
    C = 2
}
console.log(Enum.A);
console.log(Enum.B);
console.log(Enum.C);
