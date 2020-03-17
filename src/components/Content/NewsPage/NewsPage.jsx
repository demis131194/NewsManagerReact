import React, { Component } from 'react';
import { Container, Button, Row } from 'react-bootstrap';
import NewsPost from './NewsPost/NewsPost';

class NewsPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Row>
                    <NewsPost news={this.props.news.find(item => item.id == this.props.newsId)}/>
                </Row>
                <Row>
                    <Button>Prev News</Button>
                    <Button className='ml-auto'>Next News</Button>
                </Row>
            </Container>
        );
    }

}

export default NewsPage;