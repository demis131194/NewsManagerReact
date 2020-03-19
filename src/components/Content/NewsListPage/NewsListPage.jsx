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
                <SearchNewsComponent state={this.props.state.searchContent} dispatch={this.props.dispatch} />
                <hr/>
                <hr/>
                <hr/>
                <NewsList state={this.props.state.newsContent}/>
            </div>
        );
    }
}

export default NewsListPage;