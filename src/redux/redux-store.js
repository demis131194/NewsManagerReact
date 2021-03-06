import { createStore, combineReducers } from "redux";
import searchNewsBarReducer from './reducers/search-news-bar-reducer'
import newsPageNewsReducer from "./reducers/news-page-news-reducer";
import singlePageReducer from "./reducers/single-news-page-reducer";
import authReducer from "./reducers/auth-reducer";
import newsAddEditReducer from "./reducers/news-add-edit-reducer";
import addEditTagsReducer from "./reducers/edit-add-tags-reducer";
import addEditAuthorsReducer from "./reducers/edit-add-authors-reducer";

let reducers = combineReducers({
    mainContent: combineReducers({
        newsPage: combineReducers({
            newsContent: newsPageNewsReducer,
            searchContent: searchNewsBarReducer,
        }),
        singleNewsPage: singlePageReducer,
    }),
    authUser: authReducer,
    newAddEditPage: newsAddEditReducer,
    addEditTagsPage: addEditTagsReducer,
    addEditAuthorsPage: addEditAuthorsReducer,
});

let store = createStore(reducers);

window.store = store;
export default store;