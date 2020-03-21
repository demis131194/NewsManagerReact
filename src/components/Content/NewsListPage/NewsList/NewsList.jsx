import React, { Component } from 'react';
import NewsItem from './NewsItem/NewsItem';
import * as axios from 'axios';
import { Container } from 'react-bootstrap';

class NewsList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        debugger;
        return (
            <Container>
                {this.props.news.map( news => <NewsItem key={news.id} news={news}/>)}
            </Container>
        )
    }

    componentDidMount() {
        axios.get('http://localhost:8080/news-manager/news?count=10')
            .then(response => this.props.setNews(response.data.news));
    }
}

export default NewsList;