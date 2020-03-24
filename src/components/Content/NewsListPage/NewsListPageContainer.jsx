import React, { Component } from 'react';
import NewsListPage from './NewsListPage';
import { connect } from 'react-redux';


class NewsListPageContainer extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return <NewsListPage isAuth={this.props.userIsAuth}/>
    }

}

let mapStatetoProps = (state) => {
    return {
        userIsAuth: state.authUser.isAuth,
    }
}

let mapDispatchProps = (state) => {
    return {

    }
}

export default connect(mapStatetoProps, mapDispatchProps)(NewsListPageContainer);