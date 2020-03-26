import React, { Component } from 'react';
import EditAddTagsPage from './EditAddTagsPage';
import { connect } from 'react-redux';

class EditAddTagsPageApiContainer extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <EditAddTagsPage />
        )
    }
}

let EditAddTagsPageContainer = connect()(EditAddTagsPageApiContainer);

export default EditAddTagsPageContainer;