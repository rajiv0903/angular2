/**
 * ###########################################################
 * ###################### Type Inference ######################
 * ###########################################################
 */

/**
 * Where and how types are inferred.
 */

/**
 * ###########################################################
 * ###################### Basics ######################
 * ###########################################################
 */

let xx = 3;

console.log(typeof(xx));

/**
 * ###########################################################
 * ###################### Best common type ######################
 * ###########################################################
 */

/**
 * To infer the type of x in the example above, we must consider the type of each array element. 
 * Here we are given two choices for the type of the array: number and null. The best common type 
 * algorithm considers each candidate type, and picks the type that is compatible with 
 * all the other candidates.
 */

let xxx = [0, 1, null];


/**
 * When no best common type is found, the resulting inference is the empty object type, {}. 
 * Because this type has no members, attempting to use any properties of it will cause an error. 
 * This result allows you to still use the object in a type-agnostic manner, while providing type 
 * safety in cases where the type of the object can’t be implicitly determined.
 */
class Animals {
    constructor(){
        
    }
}
class Rhino extends Animals{
    constructor(){
        super();
    }
}
class Elephant extends Animals {
    constructor(){
        super();
    }
}
class Snakes extends Animals {
    constructor(){
        super();
    }
}

let zoo: Animals[] = [new Rhino(), new Elephant(), new Snakes()];

/**
 * ###########################################################
 * ###################### Contextual Type ######################
 * ###########################################################
 */

/**
 * Contextual typing applies in many cases. Common cases include arguments to function calls, 
 * right hand sides of assignments, type assertions, members of object and array literals,
 * and return statements. The contextual type also acts as a candidate type in best common type. For example:
 * In this example, best common type has a set of four candidates: Animal, Rhino, Elephant, and Snake. Of these, 
 * Animal can be chosen by the best common type algorithm.
 */
function createZoo(): Animals[]{
    return  [new Rhino(), new Elephant(), new Snakes()];
}

/**
 * TypeScript type checker used the type of the Window.onmousedown function to 
 * infer the type of the function expression on the right hand side of the assignment. 
 * When it did so, it was able to infer the type of the mouseEvent parameter. 
 * If this function expression were not in a contextually typed position, 
 * the mouseEvent parameter would have type any, and no error would have been issued.
 */

window.onmousedown = function(mouseEvent: any) { //to fix type assignation is any
    console.log(mouseEvent.buton);  //<- Now, no error is given
};