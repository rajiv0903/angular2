import * as shoppingListActions from './shopping-list.actions';
import { Ingredient } from "../../shared/ingredient.model";


export interface State{
    ingredients: Ingredient[],
    editedIngredient: Ingredient,
    editedIngredientIndex: number
}

const initialState: State = {
    ingredients:[
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
}

export function shoppingListReducer(state= initialState, action: shoppingListActions.ShoppingListActions){
    switch(action.type){
        case shoppingListActions.ADD_INGREDIENT:{
            return{
                ...state,
                ingredients: [...state.ingredients, action.payload]
            }
        }
        case shoppingListActions.ADD_INGREDIENTS:{
            return{
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            }
        }
        case shoppingListActions.UPDATE_INGREDIENT:{
            const ingredient = state.ingredients[state.editedIngredientIndex];
            const updatedIngredient = {
                ...ingredient,
                ...action.payload.ingredient
            }
            const ingredients = [...state.ingredients];
            ingredients[state.editedIngredientIndex] = updatedIngredient;
            return{
                ...state,
                ingredients: ingredients,
                editedIngredient: null,
                editedIngredientIndex: -1
            }
        }
        case shoppingListActions.DELETE_INGREDIENT:{
            const ingredients = [...state.ingredients];
            ingredients.splice(state.editedIngredientIndex, 1);
            return{
                ...state,
                ingredients: ingredients,
                editedIngredient: null,
                editedIngredientIndex: -1
            }
        }
        case shoppingListActions.START_EDIT:{
            const editedIngredient = {...state.ingredients[action.payload]};
            return{
                ...state,
                editedIngredient: editedIngredient,
                editedIngredientIndex: action.payload
            }
        }
        case shoppingListActions.STOP_EDIT:{
            return{
                ...state,
                editedIngredient: null,
                editedIngredientIndex: -1
            }
        }
        default:{
            return state;
        }
    }
};