import React, { Component } from 'react';
import SearchNewsComponent from './SearchNewsComponent/SearchNewsComponent';
import NewsList from './NewsList/NewsList';

class NewsListPage extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <SearchNewsComponent state={this.props.state.searchContent} />
                <hr/>
                <hr/>
                <hr/>
                <NewsList news={this.props.state.news}/>
            </div>
        );
    }
}

export default NewsListPage;