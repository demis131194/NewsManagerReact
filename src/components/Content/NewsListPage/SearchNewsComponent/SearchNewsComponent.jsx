import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Button, Col } from 'react-bootstrap';
import Select from 'react-select';



class SearchNewsComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col lg='10'>
                        <Select
                            defaultValue={null}
                            isMulti
                            name="colors"
                            options={this.props.state.tags.map(tag => ({ value: tag, label: tag.name }))}
                            className="basic-multi-select"
                            classNamePrefix="select"
                        />
                    </Col>
                    <Col lg='2'>
                        <Button variant='primary'>SEARCH</Button>
                    </Col>
                </Row>
                <Row>
                    <Col lg='10'>
                        <Select
                            defaultValue={null}
                            name="colors"
                            options={this.props.state.authors.map(author => ({ value: author, label: `${author.surname} ${author.name}`}))}
                            className="basic-select"
                            classNamePrefix="select"
                        />
                    </Col>
                    <Col lg='2'>
                        <Button variant='danger' >RESET</Button>
                    </Col>
                </Row>

            </Container>
        )
    }
}

export default SearchNewsComponent;