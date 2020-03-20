import React, { Component } from 'react';
import { changedSelectedAuthorActionCreator, resetSearchActionCreator, changedSelectedTagsActionCreator, setAuthors, setTags } from '../../../../redux/search-news-bar-reducer';
import SearchNewsComponent from './SearchNewsComponent';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        authors: state.mainContent.newsPage.searchContent.authors,
        tags: state.mainContent.newsPage.searchContent.tags,
        selectedAuthor: state.mainContent.newsPage.searchContent.selectedAuthor,
        selectedTags: state.mainContent.newsPage.searchContent.selectedTags,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeSelectedTags: (selectedOptions) => {
            let action = changedSelectedTagsActionCreator(selectedOptions);
            dispatch(action);
        },
        changeSelectedAuthor: (selectedOption) => {
            let action = changedSelectedAuthorActionCreator(selectedOption);
            dispatch(action);
        },
        resetSearch: () => {
            let action = resetSearchActionCreator();
            dispatch(action);
        },
        setAuthors: (authors) => {
            let action = setAuthors(authors);
            dispatch(action);
        },
        setTags: (tags) => {
            let action = setTags(tags);
            dispatch(action);
        },
    }
}

const SearchNewsContainer = connect(mapStateToProps, mapDispatchToProps)(SearchNewsComponent);

export default SearchNewsContainer;