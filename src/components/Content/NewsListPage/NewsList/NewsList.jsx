import React, { Component } from 'react';
import NewsItem from './NewsItem/NewsItem';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import ReactPaginate from 'react-paginate';
import Select from 'react-select';

let NewsList = (props) => {

    let pagesCount = Math.ceil(props.newsTotalCount / props.pageSize);

    let pageSizeOptions = [
        { label: '5', value: 5 },
        { label: '25', value: 25 },
        { label: '50', value: 50 }
    ];

    let currentPageSize = { label: props.pageSize, value: props.pageSize };

    return (
        <div>
            <Container fluid='true'>
                <Row>
                    <Col>
                        {props.news.map(news => <NewsItem key={news.id} news={news} />)}
                    </Col>
                </Row>
                <Row className='justify-content-md-center'>
                    <Col lg='2' md='2'>
                        <Select
                            defaultValue={{ label: '1', value: 1 }}
                            name="pageSize"
                            options={pageSizeOptions}
                            className="basic-select"
                            classNamePrefix="select"
                            value={currentPageSize}
                            onChange={props.changePageSize}
                        />
                    </Col>
                    <Col lg='3' md='4'>
                        <ReactPaginate
                            pageCount={pagesCount}
                            pageRangeDisplayed={2}
                            marginPagesDisplayed={2}
                            onPageChange={props.changeCurrentpage}
                            previousLabel={'previous'}
                            nextLabel={'next'}
                            breakClassName='page-item'
                            breakLinkClassName='page-link'
                            containerClassName='pagination'
                            pageClassName='page-item'
                            pageLinkClassName='page-link'
                            previousClassName='page-item'
                            nextClassName='page-item'
                            previousLinkClassName='page-link'
                            nextLinkClassName='page-link'
                            activeClassName='active'
                            disabledClassName='disabled'
                            hrefBuilder={() => { return '#' }}
                        />
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default NewsList;