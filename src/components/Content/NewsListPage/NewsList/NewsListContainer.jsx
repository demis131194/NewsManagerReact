import React, { Component } from 'react';
import NewsListAPIComponent from './NewsListAPIComponent';
import { connect } from 'react-redux';
import { setNewsActionCreator, setNewsPageSizeActionCreator, setNewsTotalCountActionCreator, setNewsCurrentPageActionCreator } from '../../../../redux/news-page-news-reducer';

let mapStateToProps = (state) => {
    return {
        news: state.mainContent.newsPage.newsContent.news,
        pageSize: state.mainContent.newsPage.newsContent.pageSize,
        newsTotalCount: state.mainContent.newsPage.newsContent.newsTotalCount,
        currentPage: state.mainContent.newsPage.newsContent.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setNews: (news) => {
            let action = setNewsActionCreator(news);
            dispatch(action);
        },
        setPageSize: (pageSize) => {
            let action = setNewsPageSizeActionCreator(pageSize);
            dispatch(action);
        },
        setNewsTotalCount: (newsTotalCount) => {
            let action = setNewsTotalCountActionCreator(newsTotalCount);
            dispatch(action);
        },
        setCurrentPage: (currentPage) => {
            debugger;
            let action = setNewsCurrentPageActionCreator(currentPage);
            dispatch(action);
        }
    }
}

const NewsListContainer = connect(mapStateToProps, mapDispatchToProps)(NewsListAPIComponent);

export default NewsListContainer;