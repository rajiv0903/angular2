import { ActionReducerMap } from '@ngrx/store';

import * as shoppingListState from '../shopping-list/store/shopping-list.reducers';
import * as authState from '../auth/store/auth.reducers';

export interface AppState{
    shoppingList: shoppingListState.State
    auth: authState.State
}

//Application Wide Constant for Reducers
export const appReducers: ActionReducerMap<AppState> = {
    shoppingList: shoppingListState.shoppingListReducer,
    auth: authState.authReducer
}