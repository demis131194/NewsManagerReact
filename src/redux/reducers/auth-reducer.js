import * as types from '../constants/action-type-constants.js';

let user = JSON.parse(localStorage.getItem('user'));

let initialState = {
    isAuth: user ? true : false,
    ...user,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_USER_DATA_ACTION_TYPE:
            return {
                ...state,
                ...action.data
            }

        default:
            return state;
    }
}

export const setUserData = (userData) => {
    return {
        type: types.SET_USER_DATA_ACTION_TYPE,
        data: {
            isAuth: userData.id ? true : false,
            ...userData,
        }
    }
}

export default authReducer;
