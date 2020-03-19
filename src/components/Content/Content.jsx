import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import { Route } from 'react-router-dom';
import NewsListPage from './NewsListPage/NewsListPage';
import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';
import NewsPageContainer from './NewsPage/NewsPageContainer';

class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container fluid='true'>
                <Route render={() => <NewsListPage />} path='/' exact />
                {/* <Route
                    render={(props) => <NewsPage newsId={props.match.params.newsId} news={this.props.store.getState().mainContent.newsPage.newsContent.news} />}
                    path='/news/:newsId' /> */}
                <Route
                    component={NewsPageContainer}
                    path='/news/:newsId' />
                <Route render={() => <LoginPage />} path='/login' />
                <Route render={() => <RegisterPage />} path='/register' />
            </Container>
        )
    }
}

export default Content;