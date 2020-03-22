import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Button, Col } from 'react-bootstrap';
import Select from 'react-select';
import * as axios from 'axios'

class SearchNewsComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const authorOptions = this.props.authors.map(author => ({ value: author, label: `${author.surname} ${author.name}` }));
        const tagsOptions = this.props.tags.map(tag => ({ value: tag.id, label: tag.name, tag: tag }));

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
                            name="tags"
                            options={tagsOptions}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            value={selectedTagsOption}
                            onChange={this.props.changeSelectedTags.bind(this)}
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
                            name="author" 
                            isClearable={true}
                            options={authorOptions}
                            className="basic-select"
                            classNamePrefix="select"
                            value={selectedAuthorOption}
                            onChange={this.props.changeSelectedAuthor.bind(this)}
                        />
                    </Col>
                    <Col lg='2'>
                        <Button variant='danger' onClick={this.props.resetSearch.bind(this)}>RESET</Button>
                    </Col>
                </Row>
            </Container>
        )
    }

    componentDidMount() {
        //AXIOS query
        // http://localhost:8080/news-manager/authors
        // http://localhost:8080/news-manager/tags
        

        axios.get('http://localhost:8080/news-manager/authors')
            .then(response => this.props.setAuthors(response.data));

        axios.get('http://localhost:8080/news-manager/tags')
            .then(response => this.props.setTags(response.data));
    }

}

export default SearchNewsComponent;