import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
class NewsItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let tags = this.props.news.tags.map(tag => <span key={tag.id}>{tag.name} </span>);
        return (
            <Row className='border border-danger m-1'>
                <Col>
                    <div>
                        <h2>
                            <Link to={'/news/' + this.props.news.id} >
                                {this.props.news.title}
                            </Link>
                        </h2>
                        <h5>{this.props.news.shortText}</h5>
                    </div>
                    <div>
                        {this.props.news.fullText}
                        <hr />
                        Author - {`${this.props.news.author.surname} ${this.props.news.author.name}`}
                        <hr />
                        {tags}
                    </div>
                </Col>
            </Row>
        )
    }
}

export default NewsItem;