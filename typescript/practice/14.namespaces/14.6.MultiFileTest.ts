/// <reference path="14.3.MutiFileValidation.ts" />
/// <reference path="14.4.MutiFileLettersOnlyValidator.ts" />
/// <reference path="14.5.MultiFileZipCodeValidator.ts" />

// Some samples to try
let strings2 = ["Hello", "98052", "101"];

// Validators to use
let validators2: { [s: string]: Validation2.StringValidator; } = {};
validators2["ZIP code"] = new Validation2.ZipCodeValidator();
validators2["Letters only"] = new Validation2.LettersOnlyValidator();

// Show whether each string passed each validator
for (let s2 of strings2) 
{
    for (let name2 in validators2) 
    {
        console.log('"' + s2 + '"'+
        (validators2[name2].isAcceptable(s2) ? " matches " : " does not match ") +
         name2);
    }
}