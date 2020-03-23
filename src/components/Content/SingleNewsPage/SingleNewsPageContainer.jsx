import React, { Component } from 'react';
import NewsPage from './SingleNewsPage';
import { connect } from 'react-redux';
import { setSingleNewsActionCreator } from '../../../redux/reducers/single-news-page-reducer';

let mapStateToProps = (state, ownProps) => {
    return {
        news: state.mainContent.singleNewsPage.news,
        newsId: ownProps.match.params.newsId,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setNews: (news) => {
            let action = setSingleNewsActionCreator(news);
            dispatch(action);
        },
    }
}

const NewsPageContainer = connect(mapStateToProps, mapDispatchToProps)(NewsPage);

export default NewsPageContainer;