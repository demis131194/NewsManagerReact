import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Button, Col } from 'react-bootstrap';
import Select from 'react-select';

class SearchNewsComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const authorOptions = this.props.authors.map(author => ({ value: author, label: `${author.surname} ${author.name}` }));
        const tagsOptions = this.props.tags.map(tag => ({ value: tag.id, label: tag.name, tag: tag}));

        const selectedAuthor = this.props.selectedAuthor;
        const selectedAuthorOption = selectedAuthor ? { value: selectedAuthor, label: `${selectedAuthor.surname} ${selectedAuthor.name}`, } : null;

        const selectedTags = this.props.selectedTags;
        const selectedTagsOption = selectedTags.map(tag => ({ value: tag.id, label: tag.name, tag: tag }));
        
        return (
            <Container>
                <Row>
                    <Col lg='10'>
                        <Select
                            defaultValue={null}
                            isMulti
                            name="colors"
                            options={tagsOptions}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            value={selectedTagsOption}
                            onChange={this.handleChangeSelectTags.bind(this)}
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
                            options={authorOptions}
                            className="basic-select"
                            classNamePrefix="select"
                            value={selectedAuthorOption}
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

    handleChangeSelectTags(selectedOptions) {
        // this.props.dispatch(changedSelectedTagsActionCreator(selectedOptions));
        this.props.changeSelectedTags(selectedOptions);
    }

    handleChangeSelectAuthor(selectedOption) {
        // this.props.dispatch(changedSelectedAuthorActionCreator(selectedOption));
        this.props.changeSelectedAuthor(selectedOption);
    }

    handleResetClick() {
        // this.props.dispatch(resetSearchActionCreator());
        this.props.resetSearch();
    }
}

export default SearchNewsComponent;