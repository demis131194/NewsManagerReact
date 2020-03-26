import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col, Button } from 'react-bootstrap';

class TagElement extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEdited: false,
        }
    }

    render() {
        let buttons
        return (
            <Row className='w-75 mx-auto bg-light mt-1 mb-1 p-1 rounded'>
                <Col lg='2'>
                    <div>
                        <h4>Tag:</h4>
                    </div>
                </Col>
                <Col lg='5'>
                    <div className='form-label-group mt-1'>
                        <label htmlFor={`input-tag-name-${this.props.tag.id}`} className='mr-2'>Tag name:</label>
                        <input id={`input-tag-name-${this.props.tag.id}`} type='text' value={this.props.tag.name} disabled={!this.state.isEdited} />
                    </div>
                </Col>
                <Col lg='5'>
                    {
                        this.state.isEdited ? (
                            <>
                                <Button className='mr-2'>Save changes</Button>
                                <Button variant='danger' onClick={() => { this.setState({ isEdited: false }) }}>Discard changes</Button>
                            </>
                        ) : (
                            <Button onClick={() => {this.setState({isEdited: true})}}>Edit</Button>
                        )
                    }
                </Col>

            </Row>
        );
    }

}

export default TagElement;