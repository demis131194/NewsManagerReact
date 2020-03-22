import React, { Component } from 'react';
import { changedSelectedAuthorActionCreator, resetSearchActionCreator, changedSelectedTagsActionCreator, setAuthorsActionCreator, setTagsActionCreator } from '../../../../redux/reducers/search-news-bar-reducer';
import { connect } from 'react-redux';
import SearchNewsComponent from './SearchNewsComponent';
import * as axios from 'axios';
import { setNewsActionCreator, setNewsTotalCountActionCreator, setNewsCurrentPageActionCreator } from '../../../../redux/reducers/news-page-news-reducer';

class SearchNewsRestApiContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SearchNewsComponent
                authors={this.props.authors}
                tags={this.props.tags}
                selectedAuthor={this.props.selectedAuthor}
                selectedTags={this.props.selectedTags}
                changeSelectedTags={this.props.changeSelectedTags}
                changeSelectedAuthor={this.props.changeSelectedAuthor}
                resetSearch={this.handleResetClick.bind(this)}
                handleSearchClick={this.handleSearchClick.bind(this)}
            />
        )
    }

    handleResetClick() {
        let pageSize = this.props.pageSize;
        this.props.resetSearch();
        debugger;

        axios.get('http://localhost:8080/news-manager/news?pageSize=' + pageSize)
            .then(response => {
                this.props.setCurrentPage(1);
                this.props.setNews(response.data.news);
                this.props.setNewsTotalCount(response.data.totalCount);
            })
    }

    handleSearchClick() {
        let authorId = this.props.selectedAuthor ? this.props.selectedAuthor.id : null;
        let tagsIdes = this.props.selectedTags ? this.props.selectedTags.map(tag => tag.id).join(',') : null;
        let pageSize = this.props.pageSize;

        let query = '?' + (authorId ? 'authorId=' + authorId + '&' : '') + (tagsIdes ? 'tagsId=' + tagsIdes + '&' : '') + 'pageSize=' + pageSize;

        debugger;

        axios.get('http://localhost:8080/news-manager/news' + query)
            .then(response => {
                this.props.setCurrentPage(1);
                this.props.setNews(response.data.news);
                this.props.setNewsTotalCount(response.data.totalCount);
            })
    }

    componentDidMount() {
        axios.get('http://localhost:8080/news-manager/authors')
            .then(response => this.props.setAuthors(response.data));

        axios.get('http://localhost:8080/news-manager/tags')
            .then(response => this.props.setTags(response.data));
    }

}

let mapStateToProps = (state) => {
    return {
        authors: state.mainContent.newsPage.searchContent.authors,
        tags: state.mainContent.newsPage.searchContent.tags,
        selectedAuthor: state.mainContent.newsPage.searchContent.selectedAuthor,
        selectedTags: state.mainContent.newsPage.searchContent.selectedTags,
        pageSize: state.mainContent.newsPage.newsContent.pageSize,
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
            let action = setAuthorsActionCreator(authors);
            dispatch(action);
        },
        setTags: (tags) => {
            let action = setTagsActionCreator(tags);
            dispatch(action);
        },
        setNews: (news) => {
            let action = setNewsActionCreator(news);
            dispatch(action);
        },
        setNewsTotalCount: (totalCount) => {
            let action = setNewsTotalCountActionCreator(totalCount);
            dispatch(action);
        },
        setCurrentPage: (currentPage) => {
            let action = setNewsCurrentPageActionCreator(currentPage);
            dispatch(action);
        },
    }
}

const SearchNewsContainer = connect(mapStateToProps, mapDispatchToProps)(SearchNewsRestApiContainer);

export default SearchNewsContainer;