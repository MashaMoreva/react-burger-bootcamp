import { apiBurger } from "../../utils/api";

export const USER_REGISTRATION_REQUEST = 'USER_REGISTRATION_REQUEST';
export const USER_REGISTRATION_SUCCESS = 'USER_REGISTRATION_SUCCESS';
export const USER_REGISTRATION_ERROR = 'USER_REGISTRATION_ERROR';

const userRegistrationSuccess = (name, email, password) => ({ type: USER_REGISTRATION_SUCCESS, payload: { name, email, password } })

export function userRegistration(name, email, password) {
    return (dispatch) =>
        apiBurger.registration(name, email, password)
            .then((name, email, password) => {
                dispatch(userRegistrationSuccess(name, email, password));
            })
            .catch((error) => {
                console.log(error)
            })
}

