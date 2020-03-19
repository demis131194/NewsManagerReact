import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Button, Col } from 'react-bootstrap';
import Select from 'react-select';
// import { changedSelectedAuthorActionCreator, resetSearchActionCreator, changedSelectedTagsActionCreator } from '../../../../redux/search-news-bar-reducer';

class SearchNewsComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const authorOptions = this.props.searchContent.authors.map(author => ({ value: author, label: `${author.surname} ${author.name}` }));
        const tagsOptions = this.props.searchContent.tags.map(tag => ({ value: tag, label: tag.name }));

        const selectedAuthor = this.props.searchContent.selectedAuthor;
        const selectedAuthorOption = selectedAuthor ? { value: selectedAuthor, label: `${selectedAuthor.surname} ${selectedAuthor.name}` } : null;

        const selectedTags = this.props.searchContent.selectedTags;
        const selectedTagsOption = selectedTags.map(tag => ({ value: tag, label: tag.name }));

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