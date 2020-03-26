import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col, Button } from 'react-bootstrap';

class TagElement extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEdited: false,
            tagName: this.props.tag.name,
        }
    }

    render() {
        return (
            <Row className='bg-light mt-1 mb-1 p-1 mx-auto rounded'>
                <Col lg='2'>
                    <div>
                        <h4>Tag:</h4>
                    </div>
                </Col>
                <Col lg='5'>
                    <div className='form-label-group mt-1'>
                        <label htmlFor={`input-tag-name-${this.props.tag.id}`} className='mr-2'>Tag name:</label>
                        <input 
                        id={`input-tag-name-${this.props.tag.id}`} 
                        value={this.state.tagName}
                        disabled={!this.state.isEdited} 
                        onChange={(e) => {this.setState({tagName: e.target.value})}}
                        />
                    </div>
                </Col>
                <Col lg='5'>
                    {
                        this.state.isEdited ? (
                            <>
                                <Button
                                    className='mr-2'
                                    onClick={() => {
                                        let editedTag = {id: this.props.tag.id, name: this.state.tagName, };
                                        console.log(editedTag);
                                        this.props.handleSaveChangesButtonClick(editedTag);
                                    }}>Save changes</Button>

                                <Button variant='danger' onClick={() => { this.setState({ isEdited: false, tagName: this.props.tag.name }) }}>Close</Button>
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

export default TagElement;