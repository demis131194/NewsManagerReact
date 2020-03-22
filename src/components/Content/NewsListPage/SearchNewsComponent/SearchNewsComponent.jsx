import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Button, Col } from 'react-bootstrap';
import Select from 'react-select';

let SearchNewsComponent = (props) => {

    const authorOptions = props.authors.map(author => ({ value: author, label: `${author.surname} ${author.name}` }));
    const tagsOptions = props.tags.map(tag => ({ value: tag.id, label: tag.name, tag: tag }));

    const selectedAuthor = props.selectedAuthor;
    const selectedAuthorOption = selectedAuthor ? { value: selectedAuthor, label: `${selectedAuthor.surname} ${selectedAuthor.name}`, } : null;

    const selectedTags = props.selectedTags;
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
                        onChange={props.changeSelectedTags}
                    />
                </Col>
                <Col lg='2'>
                    <Button variant='primary' onClick={props.handleSearchClick}>SEARCH</Button>
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
                        onChange={props.changeSelectedAuthor}
                    />
                </Col>
                <Col lg='2'>
                    <Button variant='danger' onClick={props.resetSearch}>RESET</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchNewsComponent;