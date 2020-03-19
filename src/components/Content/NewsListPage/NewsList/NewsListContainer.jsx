import React, { Component } from 'react';
import NewsList from './NewsList';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        newsContent: state.mainContent.newsPage.newsContent,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const NewsListContainer = connect(mapStateToProps, mapDispatchToProps)(NewsList);

export default NewsListContainer;