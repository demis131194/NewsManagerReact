import * as types from '../constants/action-type-constants.js';


let initiaState = {
    news: [],
    currentPage: 1,
    pageSize: 5,
    newsTotalCount: 0,
}

const newsPageNewsReducer = (state = initiaState, action) => {
    switch (action.type) {
        case types.SET_NEWS_PAGE_SIZE_ACTION_TYPE:
            return {
                ...state,
                pageSize: action.pageSize,
            }
        case types.SET_NEWS_TOTAL_COUNT_ACTION_TYPE:
            return {
                ...state,
                newsTotalCount: action.newsTotalCount,
            }
        case types.SET_NEWS_CURRENT_PAGE_ACTION_TYPE:
            return {
                ...state,
                currentPage: action.currentPage,
            }
        case types.SET_NEWS_ACTION_TYPE:
            return {
                ...state,
                news: action.news,
            }
        default:
            return state;
    }
}

export const setNewsActionCreator = (news) => ({
    type: types.SET_NEWS_ACTION_TYPE,
    news: news ? news : [],
});

export const setNewsTotalCountActionCreator = (newsTotalCount) => ({
    type: types.SET_NEWS_TOTAL_COUNT_ACTION_TYPE,
    newsTotalCount: newsTotalCount ? newsTotalCount : 5,
});

export const setNewsPageSizeActionCreator = (pageSize) => ({
    type: types.SET_NEWS_PAGE_SIZE_ACTION_TYPE,
    pageSize: pageSize ? pageSize.value : 5,
});

export const setNewsCurrentPageActionCreator = (currentPage) => ({
    type: types.SET_NEWS_CURRENT_PAGE_ACTION_TYPE,
    currentPage: currentPage ? currentPage : 1,
});

export default newsPageNewsReducer;