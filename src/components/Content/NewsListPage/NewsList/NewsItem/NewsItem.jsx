import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';

let NewsItem = (props) => {
    let tags = props.news.tags.map(tag => <span key={tag.id}>{tag.name} </span>);
    return (
        <Row className='border border-danger m-1'>
            <Col>
                <div>
                    <h2>
                        <Link to={'/news/' + props.news.id} >
                            {props.news.title}
                        </Link>
                    </h2>
                    <h5>{props.news.shortText}</h5>
                </div>
                <div>
                    {props.news.fullText}
                    <hr />
                        Author - {`${props.news.author.surname} ${props.news.author.name}`}
                    <hr />
                    {tags}
                </div>
                {
                    props.isUserAuth ? (
                        <>
                        <Link to={'/edit/' + props.news.id} className='m-2 btn btn-primary'>Edit</Link>
                        <Button variant='danger' className='m-2' onClick={() => {props.handleDeleteNewsBtnClick(props.news.id)}}>Delete</Button>
                        </>
                    ) : (
                        <></>
                    )
                }
            </Col>
        </Row>
    )
}

export default NewsItem;