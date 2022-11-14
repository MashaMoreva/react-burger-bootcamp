import { apiBurger } from "../../utils/api";

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';

const getUserSuccess = (data) => ({ type: GET_USER_SUCCESS, payload: data })

export function getUser() {
    return (dispatch) =>
    apiBurger.getProfile()
        .then((data) => {
             dispatch(getUserSuccess(data));
        })
        .catch((error) => {
            console.log(error)
        })
}
