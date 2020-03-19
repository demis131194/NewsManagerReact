import React, { Component } from 'react';
import NewsPage from './NewsPage';
import { connect } from 'react-redux';

let mapStateToProps = (state, ownProps) => {
    debugger;
    return {
        news: state.mainContent.newsPage.newsContent.news,
        newsId: ownProps.match.params.newsId,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const NewsPageContainer = connect(mapStateToProps, mapDispatchToProps)(NewsPage);

export default NewsPageContainer;