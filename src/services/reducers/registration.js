import {
    USER_REGISTRATION_REQUEST,
    USER_REGISTRATION_SUCCESS,
    USER_REGISTRATION_ERROR
} from "../actions/registration";

export const registrationState = {
    name: '',
    email: '',
    password: '',
    registrationRequest: false,
    registrationError: false,
}

export const userRegistrationReducer = (state = registrationState, action) => {
    switch (action.type) {
      case USER_REGISTRATION_REQUEST: {
        return {
          ...state,
          registrationRequest: true
        }
      }
      case USER_REGISTRATION_SUCCESS: {
        return {
          ...state,
          name: action.payload.name,
          email: action.payload.email,
          password: action.payload.password,
          burgerIngredientsError: false,
        }
      }
      case USER_REGISTRATION_ERROR: {
        return {
          ...state,
          registrationRequest: false,
          registrationError: true
        }
      }
      default: {
        return state;
      }
    }
  }
  