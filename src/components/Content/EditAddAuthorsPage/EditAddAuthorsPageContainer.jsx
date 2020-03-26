import React, { Component } from 'react';
import EditAddAuthorsPage from './EditAddAuthorsPage';
import { connect } from 'react-redux';
import { setAuthorsActionCreator, setAddAuthorNameActionCreator, setAddAuthorSurnameActionCreator } from '../../../redux/reducers/edit-add-authors-reducer';
import * as axios from 'axios';
import SERVER_LOCATION from '../../../config/server.js'

class EditAddAuthorsPageApiContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <EditAddAuthorsPage
                authors={this.props.authors}
                handleAddAuthorNameChange={this.handleAddAuthorNameChange.bind(this)}
                handleAddAuthorSurnameChange={this.handleAddAuthorSurnameChange.bind(this)}

                handleAddAuthorButtonClick={this.handleAddAuthorButtonClick.bind(this)}
                handleSaveChangesButtonClick={this.handleSaveChangesButtonClick.bind(this)}

                addAuthorName={this.props.addAuthorName}
                addAuthorSurname={this.props.addAuthorSurname}
            />
        )
    }

    handleSaveChangesButtonClick(author) {
        axios.put(SERVER_LOCATION + '/authors', author)
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

    handleAddAuthorNameChange(e) {
        debugger;
        this.props.setAddAuthorName(e.target.value);
    }

    handleAddAuthorSurnameChange(e) {
        this.props.setAddAuthorSurname(e.target.value);
    }

    handleAddAuthorButtonClick() {
        let newAuthor = { id: null, name: this.props.addAuthorName, surname: this.props.addAuthorSurname }

        axios.post(SERVER_LOCATION + '/authors', newAuthor)
            .then((response) => {
                alert('Succes!');
                this.props.setAddAuthorName('');
                this.props.setAddAuthorSurname('');
                this.componentDidMount();
            });
    }

    componentDidMount() {
        axios.get(SERVER_LOCATION + '/authors')
            .then(response => this.props.setAuthors(response.data));
    }
}

let mapStateToProps = (state) => {
    return {
        authors: state.addEditAuthorsPage.authors,
        addAuthorName: state.addEditAuthorsPage.addAuthorName,
        addAuthorSurname: state.addEditAuthorsPage.addAuthorSurname,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setAuthors: (authors) => {
            let action = setAuthorsActionCreator(authors);
            dispatch(action);
        },
        setAddAuthorName: (name) => {
            let action = setAddAuthorNameActionCreator(name);
            dispatch(action);
        },
        setAddAuthorSurname: (surname) => {
            let action = setAddAuthorSurnameActionCreator(surname);
            dispatch(action);
        },
    }
}

let EditAddAuthorsPageContainer = connect(mapStateToProps, mapDispatchToProps)(EditAddAuthorsPageApiContainer);

export default EditAddAuthorsPageContainer;