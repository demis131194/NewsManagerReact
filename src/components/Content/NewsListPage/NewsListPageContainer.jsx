import React, { Component } from 'react';
import NewsListPage from './NewsListPage';
import { connect } from 'react-redux';


class NewsListPageContainer extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return <NewsListPage userIsAuth={this.props.userIsAuth} userRole={this.props.userRole}/>
    }

}

let mapStatetoProps = (state) => {
    return {
        userIsAuth: state.authUser.isAuth,
        userRole: state.authUser.role,
    }
}

let mapDispatchProps = (state) => {
    return {

    }
}

export default connect(mapStatetoProps, mapDispatchProps)(NewsListPageContainer);