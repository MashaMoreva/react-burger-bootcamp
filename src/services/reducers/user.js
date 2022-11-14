import { GET_USER_SUCCESS } from "../actions/user";

const initialState = {
  success: false,
  user: {
    email: '',
    name: ''
  },
};

export const getProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS: {
      return {
        ...state,
        success: action.payload.success,
        user: action.payload.user,
      }
    }
    // case PATCH_USER_INFO: {
    //   return {
    //     ...state,
    //     success: action.payload.success,
    //     user: action.payload.user,
    //   }
    // }
    default: {
      return state;
    }
  }
}