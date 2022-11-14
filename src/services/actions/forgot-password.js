import { apiBurger } from "../../utils/api";

export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_ERROR = 'FORGOT_PASSWORD_ERROR';

const forgotPasswordSuccess = (email) => ({ type: FORGOT_PASSWORD_SUCCESS, payload: email })

export function forgotPassword(email) {
    return (dispatch) =>
        apiBurger.forgot(email)
            .then((email) => {
                dispatch(forgotPasswordSuccess(email));
            })
            .catch((error) => {
                console.log(error)
            })
}
