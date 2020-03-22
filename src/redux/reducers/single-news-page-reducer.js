
import * as types from '../constants/action-type-constants.js'

let initiaState = {
    news: {},
}

const singlePageReducer = (state = initiaState, action) => {
    switch (action.type) {
        case types.SET_SINGLE_NEWS_ACTION_TYPE:
            return {
                ...state,
                news: action.news,
            } 
        default:
            return state;
    }
}

export const setSingleNewsActionCreator = (news) => ({
    type: types.SET_SINGLE_NEWS_ACTION_TYPE,
    news: news,
});

export default singlePageReducer;