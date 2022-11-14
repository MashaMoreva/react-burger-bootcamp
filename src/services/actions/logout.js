import { apiBurger } from "../../utils/api";

export const USER_LOGOUT_REQUEST = 'USER_LOGOUT_REQUEST';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const USER_LOGOUT_ERROR = 'USER_LOGOUT_ERROR';

const userLogoutSuccess = (payload) => ({ type: USER_LOGOUT_SUCCESS, payload })

export function userLogout() {
    return (dispatch) =>
        apiBurger.logout()
            .then((data) => {
                const { success } = data
                if (success) {
                    dispatch(userLogoutSuccess(data));
                }
            })
            .catch((error) => {
                console.log(error)
            })
}
