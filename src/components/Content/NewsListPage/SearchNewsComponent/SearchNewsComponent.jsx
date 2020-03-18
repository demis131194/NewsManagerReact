import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Button, Col } from 'react-bootstrap';
import Select from 'react-select';
import { changedSelectedAuthorActionCreator, resetSearchActionCreator } from '../../../../redux/state';

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
                            value={this.props.state.selectedTags}
                            onChange={this.handleChangeSelectTags}
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
                            value={this.props.state.selectedAuthor}
                            onChange={this.handleChangeSelectAuthor.bind(this)}
                        />
                    </Col>
                    <Col lg='2'>
                        <Button variant='danger' onClick={this.handleResetClick.bind(this)}>RESET</Button>
                    </Col>
                </Row>
            </Container>
        )
    }

    handleChangeSelectTags() {
        alert('Tags changed');
    }

    handleChangeSelectAuthor(selectedOption) {
        this.props.dispatch(changedSelectedAuthorActionCreator(selectedOption));
    }

    handleResetClick() {
        this.props.dispatch(resetSearchActionCreator());
    }
}

export default SearchNewsComponent;