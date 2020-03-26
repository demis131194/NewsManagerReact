import React, { Component } from 'react';
import EditAddTagsPage from './EditAddTagsPage';
import { connect } from 'react-redux';
import { setTagsActionCreator } from '../../../redux/reducers/edit-add-tags-reducer';
import * as axios from 'axios';
import SERVER_LOCATION from '../../../config/server.js'

class EditAddTagsPageApiContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <EditAddTagsPage tags={this.props.tags} />
        )
    }

    componentDidMount() {
        axios.get(SERVER_LOCATION + '/tags')
            .then( response => this.props.setTags(response.data));
    }
}

let mapStateToProps = (state) => {
    return {
        tags: state.addEditTagsPage.tags,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setTags: (tags) => {
            let action = setTagsActionCreator(tags);
            dispatch(action);
        },
    }
}

let EditAddTagsPageContainer = connect(mapStateToProps, mapDispatchToProps)(EditAddTagsPageApiContainer);

export default EditAddTagsPageContainer;