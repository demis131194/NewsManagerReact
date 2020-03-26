import React, { Component } from 'react';
import EditAddAuthorsPage from './EditAddAuthorsPage';
import { connect } from 'react-redux';

class EditAddAuthorsPageApiContainer extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <EditAddAuthorsPage />
        )
    }
}

let EditAddAuthorsPageContainer = connect()(EditAddAuthorsPageApiContainer);

export default EditAddAuthorsPageContainer;