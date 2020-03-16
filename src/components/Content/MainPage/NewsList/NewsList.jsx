import React, { Component } from 'react';
import NewsItem from './NewsItem/NewsItem';

class NewsList extends Component {

    render() {
        return (
            <div>
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
            </div>
        )
    }
}

export default NewsList;