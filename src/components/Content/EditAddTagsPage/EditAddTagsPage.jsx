import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col } from 'react-bootstrap';
import TagElement from './TagElement/TagElement';

let EditAddTagsPage = (props) => {

    let items = props.tags.map(tag => {
        return (
            <TagElement key={tag.id} tag={tag} />
        )
    });

    return (
        <Container className='justify-content-center align-items-center bg-info'>
            <div className="text-center mb-4 mt-5">
                <h1 className="h3 mb-3 font-weight-normal">Add/Edit Tags</h1>
            </div>

            {items}
        </Container>
    )
}

export default EditAddTagsPage;