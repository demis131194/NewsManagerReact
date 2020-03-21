import { createStore, combineReducers } from "redux";
import searchNewsBarReducer from './search-news-bar-reducer'
import newsPageNewsReducer from "./news-page-news-reducer";
import singlePageReducer from "./single-news-page-reducer";

let reducers = combineReducers({
    mainContent: combineReducers({
        newsPage: combineReducers({
            newsContent: newsPageNewsReducer,
            searchContent: searchNewsBarReducer,
        }),
        singleNewsPage: singlePageReducer,
    }),
});

let store = createStore(reducers);

window.store = store;
export default store;