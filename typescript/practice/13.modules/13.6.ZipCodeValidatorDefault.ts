
export default class ZipCodeValidatorDefault
{
    static numberRegexp = /^[0-9]+$/;
    isAcceptable(s: string) {
        return s.length === 5 && ZipCodeValidatorDefault.numberRegexp.test(s);
    }
}