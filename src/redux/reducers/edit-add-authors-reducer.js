import * as types from '../constants/action-type-constants.js';


let initiaState = {
    authors: [],
    addAuthorName: '',
    addAuthorSurname: '',
}

const addEditAuthorsReducer = (state = initiaState, action) => {
    switch (action.type) {
        case types.SET_ADD_EDIT_AUTHORS_ACTION_TYPE: {
            return {
                ...state,
                authors: action.authors,
            }
        }
        case types.SET_ADD_AUTHOR_NAME_ACTION_TYPE: {
            return {
                ...state,
                addAuthorName: action.addAuthorName,
            }
        }
        case types.SET_ADD_AUTHOR_SURNAME_ACTION_TYPE: {
            return {
                ...state,
                addAuthorSurname: action.addAuthorSurname,
            }
        }
        default:
            return state;
    }
}

export const setAuthorsActionCreator = (authors) => ({
    type: types.SET_ADD_EDIT_AUTHORS_ACTION_TYPE,
    authors: authors,
});

export const setAddAuthorNameActionCreator = (authorName) => ({
    type: types.SET_ADD_AUTHOR_NAME_ACTION_TYPE,
    addAuthorName: authorName,
});

export const setAddAuthorSurnameActionCreator = (authorSurname) => ({
    type: types.SET_ADD_AUTHOR_SURNAME_ACTION_TYPE,
    addAuthorSurname: authorSurname,
});

export default addEditAuthorsReducer;