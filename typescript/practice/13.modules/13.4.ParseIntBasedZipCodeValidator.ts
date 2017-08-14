/**
 * Often modules extend other modules, and partially expose some of their features. 
 * A re-export does not import it locally, or introduce a local variable.
 */

export class ParseIntBasedZipCodeValidator {
    isAcceptable(s: string) {
        return s.length === 5 && parseInt(s).toString() === s;
    }
}

// Export original validator but rename it
export {ZipCodeValidator as RegExpBasedZipCodeValidator} from "./13.3.ZipCodeValidator";