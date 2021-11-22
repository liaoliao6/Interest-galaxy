import * as api from "../api/index.js";
import { AUTH } from '../constants/actionTypes';

export const signin = (form, router) => async (dispatch) => {
    try {
        console.log("signin.");
        const { data } = await api.signIn(form);
        dispatch({ type: AUTH, data });
        router.push('/');
    } catch (err) {
        console.log(err);
    }
}

export const signup = (form, router) => async (dispatch) => {
    try {
        console.log("signup.");
        const { data } = await api.signUp(form);
        dispatch({ type: AUTH, data });
        router.push('/');

    } catch (err) {
        console.log(err);
    }
}