
import { StringValidator } from "./13.2.StringValidator";


export const numberRegexp= /^[0-9]+$/;

/**export class ZipCodeValidator implements StringValidator{
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
*/

//Alternative - Export statements are handy when exports need to be renamed for consumers

class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}

// import * as validator from "./13.2.StringValidator";

// class ZipCodeValidator implements validator.StringValidator {
//     isAcceptable(s: string) {
//         return s.length === 5 && numberRegexp.test(s);
//     }
// }


export {ZipCodeValidator};
export {ZipCodeValidator as mainValidator };
