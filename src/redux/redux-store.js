import { createStore, combineReducers } from "redux";
import searchNewsBarReducer from './search-news-bar-reducer'
import newsPageNewsReducer from "./news-page-news-reducer";

let reducers = combineReducers({
    mainContent: combineReducers({

        newsPage: combineReducers({
            newsContent: newsPageNewsReducer,
            searchContent: searchNewsBarReducer,
        }),
    }),
});

let store = createStore(reducers);

window.store = store;
export default store;