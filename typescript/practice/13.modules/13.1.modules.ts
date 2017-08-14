/**
 * ###########################################################
 * #######################  Modules ##########################
 * ###########################################################
 */

/**
 * @1. nomenclature - “Internal modules” are now “namespaces”. “External modules” are now simply “modules”
 * @2. Modules are executed within their own scope, not in the global scope; this means that variables, 
 *  functions, classes, etc. declared in a module are not visible outside the module unless they are 
 *  explicitly exported using one of the export forms
 * @3. Conversely, to consume a variable, function, class, interface, etc. exported from a different module, 
 *  it has to be imported using one of the import forms.
 * @4. Modules are declarative; the relationships between modules are specified in terms of imports and exports 
 *  at the file level.
 * @5. At runtime the module loader is responsible for locating and executing all dependencies of a 
 *  module before executing it. Well-known modules loaders used in JavaScript are the CommonJS module loader 
 *  for Node.js and require.js for Web applications.
 * @6. Any declaration (such as a variable, function, class, type alias, or interface) can be exported by 
 *  adding the export keyword.
 * @7. Often modules extend other modules, and partially expose some of their features. 
 *  A re-export does not import it locally, or introduce a local variable
 * @8. Importing is just about as easy as exporting from a module. Importing an exported declaration is 
 *  done through using one of the import forms below:
 */

/**
 * Default exports
 * Each module can optionally export a default export. Default exports are marked with the
 * keyword default; and there can only be *one* default export per module. 
 * default exports are imported using a different import form.
 */

/**
 * Both CommonJS and AMD generally have the concept of an exports object which contains all 
 * exports from a module.
 * 
 * They also support replacing the exports object with a custom single object. 
 * Default exports are meant to act as a replacement for this behavior; however, 
 * the two are incompatible. TypeScript supports export = to model the traditional 
 * CommonJS and AMD workflow.
 * 
 * The export = syntax specifies a single object that is exported from the module. 
 * This can be a class, interface, namespace, function, or enum.
 * 
 * When importing a module using export =, TypeScript-specific import module = require("module") 
 * must be used to import the module.
 */

/**
 * Code Generation for Modules- 
 * Depending on the module target specified during compilation, the compiler will generate 
 * appropriate code for Node.js (CommonJS), require.js (AMD), isomorphic (UMD), SystemJS, 
 * or ECMAScript 2015 native modules (ES6) module-loading systems. 
 * For more information on what the define, require and register calls in the generated code do, 
 * consult the documentation for each module loader.
 */
/**
 * This simple example shows how the names used during importing and exporting get 
 * translated into the module loading code.
 */

//SimpleModule.ts
// import m = require("mod");
// export let t = m.something + 1;

//AMD / RequireJS SimpleModule.js
// define(["require", "exports", "./mod"], function (require, exports, mod_1) {
//     exports.t = mod_1.something + 1;
// });

//CommonJS / Node SimpleModule.js
// var mod_1 = require("./mod");
// exports.t = mod_1.something + 1;

//System SimpleModule.js
// System.register(["./mod"], function(exports_1) {
//     var mod_1;
//     var t;
//     return {
//         setters:[
//             function (mod_1_1) {
//                 mod_1 = mod_1_1;
//             }],
//         execute: function() {
//             exports_1("t", t = mod_1.something + 1);
//         }
//     }
// });

//Native ECMAScript 2015 modules SimpleModule.js
// import { something } from "./mod";
// export var t = something + 1;




/**
 * Re-export to extend- 
 * Often you will need to extend functionality on a module. A common JS pattern is to 
 * augment the original object with extensions, similar to how JQuery extensions work. 
 * As we’ve mentioned before, modules do not merge like global namespace objects would. 
 * The recommended solution is to not mutate the original object, but rather export a new 
 * entity that provides the new functionality.
 */