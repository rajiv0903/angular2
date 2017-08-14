/**
 * ###########################################################
 * #######################  Namespaces ##########################
 * ###########################################################
 */

/**
 * It’s important to note that in TypeScript 1.5, the nomenclature has changed. 
 * “Internal modules” are now “namespaces”. “External modules” are now simply “modules”, 
 * as to align with ECMAScript 2015’s terminology, (namely that module X 
 * { is equivalent to the now-preferred namespace X {).
 */

/**
 * Multi-file namespaces
 * tsc --outFile sample.js Validation.ts LettersOnlyValidator.ts ZipCodeValidator.ts Test.ts
 */