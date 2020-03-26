import React, { Component } from 'react';
import NewsList from './NewsList'
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setNewsActionCreator, setNewsPageSizeActionCreator, setNewsTotalCountActionCreator, setNewsCurrentPageActionCreator } from '../../../../redux/reducers/news-page-news-reducer';

class NewsListAPIComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <NewsList 
        newsTotalCount={this.props.newsTotalCount}
        pageSize={this.props.pageSize}
        news={this.props.news}
        currentPage={this.props.currentPage}
        changeCurrentpage={this.changeCurrentPage.bind(this)}
        changePageSize={this.changePageSize.bind(this)}
        isUserAuth={this.props.isUserAuth}
        handleDeleteNewsBtnClick={this.handleDeleteNewsBtnClick.bind(this)}
        /> 
    }

    handleDeleteNewsBtnClick = (newsId) => {
        axios.delete(`http://localhost:8080/news-manager/news/` + newsId)
            .then( response => {
                alert(`News - ${newsId} deleted`);
                this.componentDidMount();
            })
            .catch( error => {
                alert('Some error!')
            });
    }

    changeCurrentPage = (page) => {
        let newPage = page.selected + 1;
        this.props.setCurrentPage(newPage);
        axios.get(`http://localhost:8080/news-manager/news?page=${newPage}&pageSize=${this.props.pageSize}`)
            .then(response => {
                this.props.setNews(response.data.news);
                this.props.setNewsTotalCount(response.data.totalCount);
            });
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/news-manager/news?page=${this.props.currentPage}&pageSize=${this.props.pageSize}`)
            .then(response => {
                this.props.setNews(response.data.news);
                this.props.setNewsTotalCount(response.data.totalCount);
            });
    }

    changePageSize = (pageSize) => {
        this.props.setPageSize(pageSize);
        axios.get(`http://localhost:8080/news-manager/news?page=${this.props.currentPage}&pageSize=${pageSize.value}`)
            .then(response => {
                this.props.setNews(response.data.news);
                this.props.setNewsTotalCount(response.data.totalCount);
            });
    }
}

let mapStateToProps = (state) => {
    return {
        news: state.mainContent.newsPage.newsContent.news,
        pageSize: state.mainContent.newsPage.newsContent.pageSize,
        newsTotalCount: state.mainContent.newsPage.newsContent.newsTotalCount,
        currentPage: state.mainContent.newsPage.newsContent.currentPage,
        isUserAuth: state.authUser.isAuth,
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
            let action = setNewsCurrentPageActionCreator(currentPage);
            dispatch(action);
        },
    }
}

const NewsListContainer = connect(mapStateToProps, mapDispatchToProps)(NewsListAPIComponent);

export default NewsListContainer;