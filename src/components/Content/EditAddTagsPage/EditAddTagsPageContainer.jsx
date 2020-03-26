import React, { Component } from 'react';
import EditAddTagsPage from './EditAddTagsPage';
import { connect } from 'react-redux';
import { setTagsActionCreator, setAddTagNameActionCreator } from '../../../redux/reducers/edit-add-tags-reducer';
import * as axios from 'axios';
import SERVER_LOCATION from '../../../config/server.js'

class EditAddTagsPageApiContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <EditAddTagsPage
                tags={this.props.tags}
                handleAddTagNameChange={this.handleAddTagNameChange.bind(this)}
                handleAddTagButtonClick={this.handleAddTagButtonClick.bind(this)}
                handleSaveChangesButtonClick={this.handleSaveChangesButtonClick.bind(this)}
                addTagName={this.props.addTagName}
            />
        )
    }

    handleSaveChangesButtonClick(tag) {
        axios.put(SERVER_LOCATION + '/tags', tag)
            .then((response) => {
                console.log(response);
                alert('Succes!');
                this.componentDidMount();

            })
            .catch((error => {
                console.log(error);
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                  } else if (error.request) {
                    console.log(error.request);
                  } else {
                    console.log('Error', error.message);
                  }
                  console.log(error.config);
                alert('Fail!');
                this.componentDidMount();
            })
            );
    }

    handleAddTagNameChange(e) {
        this.props.setAddTagName(e.target.value);
    }

    handleAddTagButtonClick() {
        let newTag = { id: null, name: this.props.addTagName, }

        axios.post(SERVER_LOCATION + '/tags', newTag)
            .then((response) => {
                if (response.status === 200) {
                    alert('Succes!');
                    this.componentDidMount();
                }
            });
    }

    componentDidMount() {
        axios.get(SERVER_LOCATION + '/tags')
            .then(response => this.props.setTags(response.data));
    }
}

let mapStateToProps = (state) => {
    return {
        tags: state.addEditTagsPage.tags,
        addTagName: state.addEditTagsPage.addTagName,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setTags: (tags) => {
            let action = setTagsActionCreator(tags);
            dispatch(action);
        },
        setAddTagName: (name) => {
            let action = setAddTagNameActionCreator(name);
            dispatch(action);
        }
    }
}

let EditAddTagsPageContainer = connect(mapStateToProps, mapDispatchToProps)(EditAddTagsPageApiContainer);

export default EditAddTagsPageContainer;