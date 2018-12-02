# PracticeQOptimizationLazy

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Auth Module
We define Auth Module - Where all components related to Sign in and Sign Up are declared 
Auth Routing Module takes care of Auth related routing and it is part of Auth Module

## Recipes Module 
We define Recipes Module - Where all components related to Recipes are declared 
Recipes Routing Module takes care of Auth related routing and it is part of Recipes Module

## Shopping List Module 
We define Shopping List Module - Where all components related to Shopping are declared 

## Shared Module 
We define a Shared Module which has Drop Down Directive and we export the same so that it will be available to 
other feature module like Recipes and Header through App Module

##Lazy Loading
Lazy loading of Recipes related functionality is achieved by - 
We can add canLoad 
{ path: 'recipes', loadChildren:'./recipes/recipes.module#RecipesModule' },

##Introduction of Core Module 
Moved the Home and Header Component into Core Module to make the App Module Lean
Error:
Component HomeComponent is not part of any NgModule or the module has not been imported into your module.
We need to export HeaderComponent as it is being used my app.component.html
Since Core Module is loaded eagerly we can move all services from app module to core module except Auth Guard which
is being used by Recipes Module


