
let numberRegexp = /^[0-9]+$/;
class ZipCodeValidatorRequire {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
export = ZipCodeValidatorRequire;