import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';
class NewsItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
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
                    {this.props.news.tags.map(tag => {
                        return <span>{tag.name} </span>
                    })}
                </div>
            </div>
        )
    }
}

export default NewsItem;