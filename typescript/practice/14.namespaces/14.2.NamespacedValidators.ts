namespace Validation {

    export interface StringValidator {
        isAcceptable(s:string): boolean;
    }
    /**
     * These two variables are not exported hence 
     * not be visible to code outside the namespace
     */
    const lettersRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;

    export class LeetersOnlyValidator implements StringValidator{
        isAcceptable(s: string): boolean{
            return lettersRegexp.test(s);
        }
    }

    export class ZipCodeValidator implements StringValidator{
        isAcceptable(s: string): boolean{
             return s.length === 5 && numberRegexp.test(s);
        }
    }
}

//Outside of namespace 
// Some samples to try
let strings = ["Hello", "98052", "101"];
let validators :{ [s:string] : Validation.StringValidator;} = {};

validators["ZIP"] = new Validation.ZipCodeValidator();
validators["LETTERS"] = new Validation.LeetersOnlyValidator();

for (let s of strings){
    for (let name in validators){
        console.log(`"${ s }" - ${ validators[name].isAcceptable(s) ? 
            "matches" : "does not match" } ${ name }`);
    }
}