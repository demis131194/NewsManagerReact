import searchNewsBarReducer from "./search-news-bar-reducer";
import dataBase from "./database";

let store = {
    _state: {
        mainContent: {
            newsPage: {
                newsContent: {
                    news: dataBase.news,
                },
                searchContent: {
                    tags: dataBase.tags,
                    authors: dataBase.authors,
                    selectedTags: [

                    ],
                    selectedAuthor: null,
                },
            },
            singleNewsPage: {
                news: null,
            }
        },

    },

    _callSubscriber(store) {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.mainContent.newsPage.searchContent = searchNewsBarReducer(this._state.mainContent.newsPage.searchContent, action);

        this._callSubscriber(this._state);
    }
}

// window.store = store;
export default store;