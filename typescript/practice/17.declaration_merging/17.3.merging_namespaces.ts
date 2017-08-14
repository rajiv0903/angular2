
namespace Animals2{
    export class Zebra{}
}

namespace Animals2{
    export interface Legged{
        numberOfLegs: number;
    }
    export class Dog{    }
}

namespace Animals2{
    let haveMuscles :boolean = true;

    export function animalsHaveMuscles(){
        return haveMuscles;
    }
}

namespace Animals2{
    export function doAnimalsHaveMuscles(){
        //return haveMuscles; // <-- error, haveMuscles is not visible here
        //It will be visible if we export the haveMuscles
    }
}