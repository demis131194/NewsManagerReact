import React, { Component } from 'react';
import NewsItem from './NewsItem/NewsItem';

class NewsList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.state.news.map( news => <NewsItem news={news}/>)}
            </div>
        )
    }
}

export default NewsList;