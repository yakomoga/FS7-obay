import { LOGIN_USER_BEGIN, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } from "../actionTypes";
import axios from "axios";


export const loginUserBegin = () => ({
    type: LOGIN_USER_BEGIN
})
export const loginUserSuccess = (user) => ({
    type: LOGIN_USER_SUCCESS,
    payload: { user }
})
export const loginUserError = (error) => ({
    type: LOGIN_USER_ERROR,
    payload: { error }
})

//put this to reducer
export const userLogin = (email, password) => {
    return dispatch => {
        dispatch(loginUserBegin());
        return axios("/users/login", {
            method: "POST",
            data: {
                email,
                password,
            },
        })
            .then((response) => {
                console.log(response.data);
                localStorage.setItem("token", response.data.token);
                // openProfile();
                dispatch(loginUserSuccess(response.data.user))
            })
            .catch((error) => {dispatch(loginUserError(error))
                console.log(error);
            });
    }
}