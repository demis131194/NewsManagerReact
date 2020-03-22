import React, { Component } from 'react';
import NewsItem from './NewsItem/NewsItem';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import ReactPaginate from 'react-paginate';

let NewsList = (props) => {

    let pagesCount = Math.ceil(props.newsTotalCount / props.pageSize);

    return (
        <Container>
            {props.news.map(news => <NewsItem key={news.id} news={news} />)}
            <nav className=''>
                <ReactPaginate
                    pageCount={pagesCount}
                    pageRangeDisplayed='2'
                    marginPagesDisplayed='2'
                    onPageChange={props.changeCurrentpage}
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakClassName='page-item'
                    breakLinkClassName='page-link'
                    containerClassName='pagination justify-content-center p-2'
                    pageClassName='page-item'
                    pageLinkClassName='page-link'
                    previousClassName='page-item'
                    nextClassName='page-item'
                    previousLinkClassName='page-link'
                    nextLinkClassName='page-link'
                    activeClassName='active'
                    disabledClassName='disabled'
                    hrefBuilder={() => {return '#'}}
                />
            </nav>
        </Container>
    )
}

export default NewsList;