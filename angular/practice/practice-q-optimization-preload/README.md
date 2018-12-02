# PracticeQOptimizationPreload

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## JIT & AOT
Just in Time and Ahead of Time Compilation
Just in Time is default
JIT:
Development -> Production -> App dowanloaded into Browser -> Angular parses and compiles Templates (to JavaScript)
AOT:
Development -> Angular parses and compiles Templates (to JavaScript) -> Production -> App dowanloaded into Browser
Templates Gets Checked 
Faster Startup
Smaller File Size (It does not send the whole compiler)

ng build --prod --aot

##Lazy Loading and Preloading Strategy 
If we are using Lazy loading browser will try to download at the time of event triggered; 
but we can pre-load while user is using other stiffs and we can load ahead of using that same 
using - App Root Router
RouterModule.forRoot(appRoutes,{preloadingStrategy: PreloadAllModules})
In such cases only images (External) will be loaded not the JS file

