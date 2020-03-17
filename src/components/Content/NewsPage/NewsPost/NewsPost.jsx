import React, { Component } from 'react';
import { Container, Row, Button, Col } from 'react-bootstrap';

class NewsPost extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className='border border-secondary'>
                <Row>
                    <Col className='border-bottom border-dark'>
                        <div>
                            <Row>
                                <Col lg='11'>
                                    <h2>{this.props.news.title}</h2>
                                </Col>
                                <Col lg='1'>
                                    <Button variant='danger' className='ml-auto'>Close</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg='9'>
                                    <h5>{this.props.news.shortText}</h5>
                                </Col>
                                <Col lg='3' className='text-right'>
                                    <span>{this.props.news.creationDate}</span>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div>
                            {this.props.news.fullText}
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default NewsPost;