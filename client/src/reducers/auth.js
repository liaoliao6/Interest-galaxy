import * as actionType from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
    console.log('auth reducer');
    switch (action.type) {
        case actionType.AUTH:
            console.log('auth reducer AUTH');
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return { ...state, authData: action.data, loading: false, errors: null };
        case actionType.LOGOUT:
            console.log('auth reducer LOGOUT');
            localStorage.clear();
            return { ...state, authData: null, loading: false, errors: null };
        default:
            return state;
    }
};

export default authReducer;