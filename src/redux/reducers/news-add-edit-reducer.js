import * as types from '../constants/action-type-constants.js';


let initiaState = {
    newsId: null,
    currentTitleText: '',
    currentShortText: '',
    currentFullText: '',
    currentTags: [],
    tagsOptions: [],
    currentAuthor: {
        "id": 2,
        "name": "Vasya",
        "surname": "Pupkin",
    },
}

const newsAddEditReducer = (state = initiaState, action) => {
    switch (action.type) {
        case types.SET_ADD_EDIT_NEWS_ACTION_TYPE: {
            return {
                ...state,
                ...action.data,
            }
        }
        default:
            return state;
    }
}

export const setAddEditNewsActionCreator = (data) => ({
    type: types.SET_ADD_EDIT_NEWS_ACTION_TYPE,
    data: data,
});

export default newsAddEditReducer;