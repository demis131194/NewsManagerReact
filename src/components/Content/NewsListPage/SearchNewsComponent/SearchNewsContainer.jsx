import React, { Component } from 'react';
import { changedSelectedAuthorActionCreator, resetSearchActionCreator, changedSelectedTagsActionCreator } from '../../../../redux/search-news-bar-reducer';
import SearchNewsComponent from './SearchNewsComponent';
import StroeContext from '../../../../StoreContext';

class SearchNewsContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        // let searchContent = this.props.store.getState().mainContent.newsPage.searchContent;

        return (
            <StroeContext.Consumer>
                {
                    (store) => {
                        let searchContent = store.getState().mainContent.newsPage.searchContent;

                        let handleChangeSelectTags = (selectedOptions) => {
                            store.dispatch(changedSelectedTagsActionCreator(selectedOptions));
                        }
                    
                        let handleChangeSelectAuthor = (selectedOption) => {
                            store.dispatch(changedSelectedAuthorActionCreator(selectedOption));
                        }
                    
                        let handleResetClick = () => {
                            store.dispatch(resetSearchActionCreator());
                        }

                        return (
                            <SearchNewsComponent
                                searchContent={searchContent}
                                changeSelectedTags={handleChangeSelectTags.bind(store)}
                                changeSelectedAuthor={handleChangeSelectAuthor.bind(store)}
                                resetSearch={handleResetClick.bind(store)}
                            />
                        )
                    }
                }
            </StroeContext.Consumer>
        )
    }

    // handleChangeSelectTags(selectedOptions) {
    //     this.props.store.dispatch(changedSelectedTagsActionCreator(selectedOptions));
    // }

    // handleChangeSelectAuthor(selectedOption) {
    //     this.props.store.dispatch(changedSelectedAuthorActionCreator(selectedOption));
    // }

    // handleResetClick() {
    //     this.props.store.dispatch(resetSearchActionCreator());
    // }
}

export default SearchNewsContainer;