import * as api from "../api/index.js";
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export const signin = (form, history) => async (dispatch) => {
    try {
        // TODO: send form to backend.
        console.log("signin.");
        
        history.push('/');

    } catch (err) {
        console.log(err);
    }
}

export const signup = (form, history) => async (dispatch) => {
    try {
        // TODO: send form to backend.
        console.log("signup.");
        
        history.push('/');

    } catch (err) {
        console.log(err);
    }
}