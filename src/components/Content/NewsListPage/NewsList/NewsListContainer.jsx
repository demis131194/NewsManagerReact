import React, { Component } from 'react';
import NewsList from './NewsList';
import { connect } from 'react-redux';
import { setNewsActionCreator } from '../../../../redux/news-page-news-reducer';

let mapStateToProps = (state) => {
    return {
        news: state.mainContent.newsPage.newsContent.news,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setNews: (news) => {
            let action = setNewsActionCreator(news);
            dispatch(action);
        }
    }
}

const NewsListContainer = connect(mapStateToProps, mapDispatchToProps)(NewsList);

export default NewsListContainer;