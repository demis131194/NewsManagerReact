import React, { Component } from 'react';
import NewsItem from './NewsItem/NewsItem';
import * as axios from 'axios';

class NewsList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.news.map( news => <NewsItem key={news.id} news={news}/>)}
            </div>
        )
    }

    componentDidMount() {
        axios.get('http://localhost:8080/news-manager/news')
            .then(response => this.props.setNews(response.data));
    }
}

export default NewsList;