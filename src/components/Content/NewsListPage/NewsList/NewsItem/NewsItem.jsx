import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';
class NewsItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let tags = this.props.news.tags.map(tag => <span key={tag.id}>{tag.name} </span>);
        return (
            <div className='border border-danger'>
                <div>
                    <h2>
                        <Link to={'/news/' + this.props.news.id} target='__blank' >
                            {this.props.news.title}
                        </Link>
                    </h2>
                    <h5>{this.props.news.shortText}</h5>
                </div>
                <div>
                    {this.props.news.fullText}
                    <hr />
                    {tags}
                </div>
            </div>
        )
    }
}

export default NewsItem;