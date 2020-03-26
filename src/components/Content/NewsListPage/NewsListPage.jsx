import React, { Component } from 'react';
import SearchNewsContainer from './SearchNewsComponent/SearchNewsContainer';
import NewsListContainer from './NewsList/NewsListContainer';
import { Container, Row, Col } from 'react-bootstrap';
import SideMenuBar from './SideMenuBar/SideMenuBar';

let NewsListPage = (props) => {
    return (
        <Container fluid='true'>
            <Row>
                 <SearchNewsContainer /> 
            </Row>
            <Row>
                <Col lg='2' md='3'>
                {props.userIsAuth ? <SideMenuBar userRule={props.userRole} /> : <></>}
                </Col>
                <Col lg='8' md='7'>
                    <NewsListContainer />
                </Col>
            </Row>

        </Container>
    );
}

export default NewsListPage;