import * as types from '../constants/action-type-constants.js';

let initialState = {
    id: null,
    name: null,
    surname: null,
    login: null,
    role: null,
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
            id: userData.id,
            name: userData.name,
            surname: userData.surname,
            login: userData.login,
            role: userData.role,
        }
    }
}

export default authReducer;
