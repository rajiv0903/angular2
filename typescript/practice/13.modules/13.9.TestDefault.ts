import Validator from './13.6.ZipCodeValidatorDefault';
import validate from './13.7.StaticZipCodeValidatorDefault';
import num from './13.8.OneTwoThreeDefault';

let myValidator = new Validator();

console.log (myValidator.isAcceptable('98052'));

let strings = ["Hello", "98052", "101"];

strings.forEach(
    s => {console.log(`"${s}" ${validate(s) ? " matches" : " does not match"}`);}
);

console.log(num);