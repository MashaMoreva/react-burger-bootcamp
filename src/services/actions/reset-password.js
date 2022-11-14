import { apiBurger } from "../../utils/api";

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_ERROR = 'RESET_PASSWORD_ERROR';

const resetPasswordSuccess = (password, token) => ({ type: RESET_PASSWORD_SUCCESS, payload: { password, token } })

export function resetPassword(password, token) {
    return (dispatch) =>
        apiBurger.reset(password, token)
            .then((password, token) => {
                dispatch(resetPasswordSuccess(password, token));
            })
            .catch((error) => {
                console.log(error)
            })
}
