import searchNewsBarReducer from "./reducers/search-news-bar-reducer";
import dataBase from "./database";

let store = {
    _state: {
        mainContent: {
            newsPage: {
                newsContent: {
                    news: dataBase.news,
                    currentPage: 1,
                    pageSize: 5,
                    newsTotalCount: 0,
                },
                searchContent: {
                    tags: dataBase.tags,
                    authors: dataBase.authors,
                    selectedTags: [],
                    selectedAuthor: null,
                },
            },
            singleNewsPage: {
                news: null,
            }
        },
        authUser: {
            id: 1,
            name: 'Demis',
            surname: 'Katsuk',
            login: 'admin',
            password: 'admin',
            role: 'ADMIN',
        }
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