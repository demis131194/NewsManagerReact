
const SET_NEWS_ACTION_TYPE = 'SET_SINGLE_NEWS_ACTION';

let initiaState = {
    news: []
}

const newsPageNewsReducer = (state = initiaState, action) => {
    switch (action.type) {
        case SET_NEWS_ACTION_TYPE:
            return {
                ...state,
                news: action.news,
            } 
        default:
            return state;
    }
}

export const setNewsActionCreator = (news) => ({
    type: SET_NEWS_ACTION_TYPE,
    news: news ? news : [],
});

export default newsPageNewsReducer;