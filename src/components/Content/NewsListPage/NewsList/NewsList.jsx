import React, { Component } from 'react';
import NewsItem from './NewsItem/NewsItem';

class NewsList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.newsContent.news.map( news => <NewsItem key={news.id} news={news}/>)}
            </div>
        )
    }
}

export default NewsList;