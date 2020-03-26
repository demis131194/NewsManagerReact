import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import { Route } from 'react-router-dom';
import RegisterPage from './RegisterPage/RegisterPage';
import NewsPageContainer from './SingleNewsPage/SingleNewsPageContainer';
import LoginPageContainer from './LoginPage/LoginPageContainer.jsx';
import NewsListPageContainer from './NewsListPage/NewsListPageContainer';
import NewsAddEditPageContainer from './NewsAddEditPage/NewsAddEditPageContainer';
import EditAddTagsPageContainer from './EditAddTagsPage/EditAddTagsPageContainer';
import EditAddAuthorsPageContainer from './EditAddAuthorsPage/EditAddAuthorsPageContainer';

class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container fluid='true'>
                <Route render={() => <NewsListPageContainer />} path='/' exact />
                <Route
                    component={NewsPageContainer}
                    path='/news/:newsId' />
                <Route component={LoginPageContainer} path='/login' />
                <Route render={() => <RegisterPage />} path='/register' />
                <Route component={NewsAddEditPageContainer} path={['/add', '/edit/:newsId']} />
                <Route component={EditAddTagsPageContainer} path={'/tags'} />
                <Route component={EditAddAuthorsPageContainer} path={'/authors'} />
            </Container>
        )
    }
}

export default Content;