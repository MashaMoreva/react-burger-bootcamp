import { USER_AUTHORIZATION_SUCCESS } from "../actions/authorization"
import { USER_LOGOUT_SUCCESS } from "../actions/logout"

export const initialState = {
    authorization: false,
    user: {}
}

export const userAuthorizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_AUTHORIZATION_SUCCESS: {
            return {
                ...state,
                authorization: action.payload.success,
                user: action.payload.user
            }
        }
        case USER_LOGOUT_SUCCESS: {
            return {
                ...state,
                authorization: action.payload.success,
                user: {}
            }
        }
        default: {
            return state;
        }
    }
}
