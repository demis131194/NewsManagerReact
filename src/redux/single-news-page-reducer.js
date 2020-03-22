
const SET_SINGLE_NEWS_ACTION_TYPE = 'SET_SINGLE_NEWS_ACTION';

let initiaState = {
    news: {},
}

const singlePageReducer = (state = initiaState, action) => {
    switch (action.type) {
        case SET_SINGLE_NEWS_ACTION_TYPE:
            return {
                ...state,
                news: action.news,
            } 
        default:
            return state;
    }
}

export const setSingleNewsActionCreator = (news) => ({
    type: SET_SINGLE_NEWS_ACTION_TYPE,
    news: news,
});

export default singlePageReducer;