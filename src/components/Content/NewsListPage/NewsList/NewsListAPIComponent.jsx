import React, { Component } from 'react';
import NewsList from './NewsList'
import * as axios from 'axios';

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
        changeCurrentpage={this.changeCurrentpage.bind(this)}
        /> 
    }

    changeCurrentpage = (page) => {
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
}

export default NewsListAPIComponent;