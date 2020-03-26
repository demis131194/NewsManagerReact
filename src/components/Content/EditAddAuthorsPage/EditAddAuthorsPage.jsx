import React from 'react';
import AuthorElement from './AuthorElement/AuthorElement';
import { Container, Row, Col, Button } from 'react-bootstrap';

let EditAddAuthorsPage = (props) => {
    let items = props.authors.map(author => {
        return (
            <AuthorElement key={author.id} author={author} handleSaveChangesButtonClick={props.handleSaveChangesButtonClick} />
        )
    });

    return (
        <Container className='justify-content-center align-items-center bg-light pb-2 mt-4 border border-dark w-75'>
            <div className="text-center mb-4 mt-5">
                <h1 className="h3 mb-3 font-weight-normal">Add/Edit Authors</h1>
            </div>

            {items}

            <Row className='mx-auto bg-light mt-5 p-2 rounded'>
                <Col lg='2'>
                    <div>
                        <h4>Add Author:</h4>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className='input-group mt-1'>
                        <label htmlFor={`input-author-name-add`} className='mr-2'>Author fullname:</label>
                        <input id={`input-author-name-add`} 
                        value={props.addAuthorName} 
                        onChange={props.handleAddAuthorNameChange}
                        className='form-control'
                        />
                        <input id={`input-author-surname-add`} 
                        value={props.addAuthorSurname} 
                        onChange={props.handleAddAuthorSurnameChange}
                        className='form-control'
                        />
                    </div>
                </Col>
                <Col lg='4'>
                    <Button onClick={props.handleAddAuthorButtonClick}>Add</Button>
                </Col>

            </Row>
        </Container>
    )
}

export default EditAddAuthorsPage;