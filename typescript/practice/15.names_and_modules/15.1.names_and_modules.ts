/**
 * ###########################################################
 * ################ Namespaces and Modules ###################
 * ###########################################################
 */

/**
 * @1. This post outlines the various ways to organize your code using namespaces and modules in TypeScript
 * 
 */

/**
 * Using Namespaces- 
 * Namespaces are simply named JavaScript objects in the global namespace. 
 * This makes namespaces a very simple construct to use. They can span multiple files, 
 * and can be concatenated using --outFile. Namespaces can be a good way to structure 
 * your code in a Web Application, with all dependencies included as <script> tags in your HTML page.
 * 
 * Just like all global namespace pollution, it can be hard to identify component dependencies, 
 * especially in a large application.
 */

/**
 * Using Modules-
 * @1. Just like namespaces, modules can contain both code and declarations. 
 *  The main difference is that modules declare their dependencies.
 * @2. Modules provide for better code reuse, stronger isolation and better tooling support for bundling.
 * @3. Modules also have a dependency on a module loader (such as CommonJs/Require.js)
 * @4. It is also worth noting that, for Node.js applications, modules are the default and the recommended 
 *  approach to structure your code.
 * @5. Starting with ECMAScript 2015, modules are native part of the language, and should be 
 * supported by all compliant engine implementations. Thus, for new projects modules would be 
 * the recommended code organization mechanism
 */

/**
 * Pitfalls of Namespaces and Modules-
 * @1. The compiler will try to find a .ts, .tsx, and then a .d.ts with the appropriate path. If a specific 
 *  file could not be found, then the compiler will look for an ambient module declaration.
 *  Hence /// <reference>-ing a module is not ideal
 * @2. A key feature of modules in TypeScript is that two different modules will never contribute 
 *  names to the same scope. Because the consumer of a module decides what name to assign it, 
 *  there’s no need to proactively wrap up the exported symbols in a namespace.
 * @3. To reiterate why you shouldn’t try to namespace your module contents, the general idea of 
 *  namespacing is to provide logical grouping of constructs and to prevent name collisions. 
 *  Because the module file itself is already a logical grouping, and its top-level name is defined 
 *  by the code that imports it, it’s unnecessary to use an additional module layer for exported objects.
 */

/**
 * Trade-offs of Modules-
 * Just as there is a one-to-one correspondence between JS files and modules, TypeScript has a 
 * one-to-one correspondence between module source files and their emitted JS files. One effect 
 * of this is that it’s not possible to concatenate multiple module source files depending on the 
 * module system you target. For instance, you can’t use the outFile option while targeting commonjs 
 * or umd, but with TypeScript 1.8 and later, it’s possible to use outFile when targeting amd or system.
 */