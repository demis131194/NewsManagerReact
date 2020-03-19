import React, { Component } from 'react';
import NewsItem from './NewsItem/NewsItem';
import NewsList from './NewsList';
import StroeContext from '../../../../StoreContext';

class NewsListContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StroeContext.Consumer > 
                {
                    (store) => (
                        <NewsList newsContent={store.getState().mainContent.newsPage.newsContent }/>
                    )
                }
            </StroeContext.Consumer>
            
        )
    }
}

export default NewsListContainer;