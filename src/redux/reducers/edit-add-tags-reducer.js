import * as types from '../constants/action-type-constants.js';


let initiaState = {
    tags: [],
    addTagName: '',
}

const addEditTagsReducer = (state = initiaState, action) => {
    switch (action.type) {
        case types.SET_ADD_EDIT_TAGS_ACTION_TYPE: {
            return {
                ...state,
                tags: action.tags,
            }
        }
        case types.SET_ADD_TAG_NAME_ACTION_TYPE: {
            return {
                ...state,
                addTagName: action.addTagName,
            }
        }
        default:
            return state;
    }
}

export const setTagsActionCreator = (tags) => ({
    type: types.SET_ADD_EDIT_TAGS_ACTION_TYPE,
    tags: tags,
});

export const setAddTagNameActionCreator = (addTagName) => ({
    type: types.SET_ADD_TAG_NAME_ACTION_TYPE,
    addTagName: addTagName,
});

export default addEditTagsReducer;