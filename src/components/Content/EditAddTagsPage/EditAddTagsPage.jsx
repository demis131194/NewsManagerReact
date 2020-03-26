import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col, Button } from 'react-bootstrap';
import TagElement from './TagElement/TagElement';

let EditAddTagsPage = (props) => {

    let items = props.tags.map(tag => {
        return (
            <TagElement key={tag.id} tag={tag} handleSaveChangesButtonClick={props.handleSaveChangesButtonClick} />
        )
    });

    return (
        <Container className='justify-content-center align-items-center bg-light pb-2 mt-4 border border-dark w-75'>
            <div className="text-center mb-4 mt-5">
                <h1 className="h3 mb-3 font-weight-normal">Add/Edit Tags</h1>
            </div>

            {items}

            <Row className='mx-auto bg-light mt-5 p-2 rounded'>
                <Col lg='2'>
                    <div>
                        <h4>Add Tag:</h4>
                    </div>
                </Col>
                <Col lg='5'>
                    <div className='form-label-group mt-1'>
                        <label htmlFor={`input-tag-name-add`} className='mr-2'>Tag name:</label>
                        <input id={`input-tag-name-add`} value={props.addTagName} onChange={props.handleAddTagNameChange}/>
                    </div>
                </Col>
                <Col lg='5'>
                    <Button onClick={props.handleAddTagButtonClick}>Add</Button>
                </Col>

            </Row>
        </Container>
    )
}

export default EditAddTagsPage;