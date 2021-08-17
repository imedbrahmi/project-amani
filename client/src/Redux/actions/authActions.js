import axios from "axios";
import { REGISTER_USER, LOGIN_USER, FAIL_USER, LOAD_USER, CURRENT_USER,LOGOUT_USER } from '../constants/actionTypes'
import { setAlert } from './alertActions'

export const register = (user, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        let result = await axios.post("api/auth/register", user);
        //succees action
        dispatch({ type: REGISTER_USER, payload: result.data }); //{user,token,msg}
        history.push("./Login");
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
          errors.forEach((error) => {
            dispatch(setAlert({ msg: error.msg, alertType: "danger" }));
          });
        }
        dispatch({ type: FAIL_USER });
    }
};

export const login = (user, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        let result = await axios.post("api/auth/login", user);
        dispatch({ type: LOGIN_USER, payload: result.data }); //{msg,token,user}
        history.push("./Write");//page eli bech tehal baed ma yamel loginin 
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
          errors.forEach((error) => {
            dispatch(setAlert({ msg: error.msg, alertType: "danger" }));
          });
        }
        dispatch({ type: FAIL_USER });
    }
};

export const current = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        let result = await axios.get("api/auth/current", config);
        dispatch({ type: CURRENT_USER, payload: result.data }); //{msg , user}
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error });
    }
};
// logout
export const logout = () => {
    return {
        type: LOGOUT_USER,
    };
};
