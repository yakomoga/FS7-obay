import { REGISTER_USER_BEGIN, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR } from "../actionTypes";
import axios from "axios";


export const registerUserBegin = () => ({
    type: REGISTER_USER_BEGIN
})
export const registerUserSuccess = (user) => ({
    type: REGISTER_USER_SUCCESS,
    payload: { user }
})
export const registerUserError = (error) => ({
    type: REGISTER_USER_ERROR,
    payload: { error }
})

//put this to reducer
export const userRegistration = (firstName, lastName, email, password) => {
    return dispatch => {
        dispatch(registerUserBegin());
        return axios("/users/register", {
            method: "POST",
            data: {
                firstName,
                lastName,
                email,
                password,
            },
        })
            .then((response) => {
                console.log(response.data);
                localStorage.setItem("token", response.data.token);
                dispatch(registerUserSuccess(response.data.user))
            })
            .catch((error) => {dispatch(registerUserError(error))
                console.log(error);
            });
    }
}
