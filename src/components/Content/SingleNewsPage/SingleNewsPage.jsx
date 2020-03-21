import React, { Component } from 'react';
import { Container, Button, Row } from 'react-bootstrap';
import NewsPost from './NewsPost/NewsPost';
import * as axios from 'axios';

class NewsPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Row>
                    <NewsPost news={this.props.news} />
                </Row>
                <Row>
                    <Button>Prev News</Button>
                    <Button className='ml-auto'>Next News</Button>
                </Row>
            </Container>
        );
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/news-manager/news/${this.props.newsId}`)
            .then(response => this.props.setNews(response.data))
    }

}

export default NewsPage;