/**
 * ###########################################################
 * ############  Iterators and Generators ####################
 * ###########################################################
 */

/**
 * An object is deemed iterable if it has an implementation for the Symbol.iterator property. 
 * Some built-in types like Array, Map, Set, String, Int32Array, Uint32Array, etc. 
 * have their Symbol.iterator property already implemented. Symbol.iterator function on an 
 * object is responsible for returning the list of values to iterate on.
 */

let someArray = [1, "string", false];

//for..of 
for (let i of someArray){
    console.log(i); // 1, "string", false
}

let list = [4, 5, 6];
//for..in
for (let i in list){
    console.log(i);  // "0", "1", "2",
}
for (let i of list) {
   console.log(i); // "4", "5", "6"
}

let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";

console.log(pets);

for (let pet in pets) {
   console.log(pet); // "species"
}

for (let pet of pets) {
    console.log(pet); // "Cat", "Dog", "Hamster"
}

