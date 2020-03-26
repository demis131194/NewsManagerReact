import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col, Button } from 'react-bootstrap';

class AuthorElement extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEdited: false,
            authorName: this.props.author.name,
            authorSurname: this.props.author.surname,
        }
    }

    render() {
        return (
            <Row className='bg-light mt-1 mb-1 p-1 mx-auto rounded'>
                <Col lg='2'>
                    <div>
                        <h4>Author:</h4>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className='input-group mt-1'>
                        <label htmlFor={`input-author-name-${this.props.author.id}`} className='mr-2'>Author fullname:</label>
                        <input 
                        id={`input-author-name-${this.props.author.id}`} 
                        value={this.state.authorName}
                        disabled={!this.state.isEdited} 
                        onChange={(e) => {this.setState({authorName: e.target.value})}}
                        className='form-control'
                        />
                        <input 
                        id={`input-author-surname-${this.props.author.id}`} 
                        value={this.state.authorSurname}
                        disabled={!this.state.isEdited} 
                        onChange={(e) => {this.setState({authorSurname: e.target.value})}}
                        className='form-control'
                        />
                    </div>
                </Col>
                <Col lg='4'>
                    {
                        this.state.isEdited ? (
                            <>
                                <Button
                                    className='mr-2'
                                    onClick={() => {
                                        let editedAuthor = {id: this.props.author.id, name: this.state.authorName, surname: this.state.authorSurname };
                                        this.props.handleSaveChangesButtonClick(editedAuthor);
                                    }}>Save changes</Button>

                                <Button variant='danger' onClick={() => { this.setState({ isEdited: false, authorName: this.props.author.name, authorSurname: this.props.author.surname,}) }}>Close</Button>
                            </>
                        ) : (
                                <Button onClick={() => { this.setState({ isEdited: true, }) }}>Edit</Button>
                            )
                    }
                </Col>

            </Row>
        );
    }
}

export default AuthorElement;