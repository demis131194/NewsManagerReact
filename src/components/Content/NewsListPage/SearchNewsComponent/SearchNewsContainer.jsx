import React, { Component } from 'react';
import { changedSelectedAuthorActionCreator, resetSearchActionCreator, changedSelectedTagsActionCreator } from '../../../../redux/search-news-bar-reducer';
import SearchNewsComponent from './SearchNewsComponent';

class SearchNewsContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let searchContent = this.props.store.getState().mainContent.newsPage.searchContent;

        return (
            <SearchNewsComponent
                searchContent={searchContent}
                changeSelectedTags={this.handleChangeSelectTags.bind(this)}
                changeSelectedAuthor={this.handleChangeSelectAuthor.bind(this)}
                resetSearch={this.handleResetClick.bind(this)}
            />
        )
    }

    handleChangeSelectTags(selectedOptions) {
        this.props.store.dispatch(changedSelectedTagsActionCreator(selectedOptions));
    }

    handleChangeSelectAuthor(selectedOption) {
        this.props.store.dispatch(changedSelectedAuthorActionCreator(selectedOption));
    }

    handleResetClick() {
        this.props.store.dispatch(resetSearchActionCreator());
    }
}

export default SearchNewsContainer;