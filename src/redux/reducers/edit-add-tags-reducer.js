import * as types from '../constants/action-type-constants.js';


let initiaState = {
    tags: [],
}

const addEditTagsReducer = (state = initiaState, action) => {
    switch (action.type) {
        case types.SET_ADD_EDIT_TAGS_ACTION_TYPE: {
            return {
                ...state,
                tags: action.tags,
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

export default addEditTagsReducer;