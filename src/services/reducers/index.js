import { combineReducers } from 'redux';
import { burgerIngredientsReducer } from './burger-ingredients';
import { ingredientDetailsReducer } from './ingredient-details';
import { burgerConstructorReducer } from './burger-constructor';
import { orderDetailsReducer } from './order-details';
import { scrollIngredientsReducer } from './burger-ingredients-scroll';
import { userRegistrationReducer } from './registration';
import { getProfileReducer } from './user';

export const rootReducer = combineReducers({
    burgerIngredients: burgerIngredientsReducer,
    ingredientDetails: ingredientDetailsReducer,
    burgerConstructor: burgerConstructorReducer,
    orderDetails: orderDetailsReducer,
    scrollIngredients: scrollIngredientsReducer,
    registration: userRegistrationReducer,
    getProfile: getProfileReducer,
  })
