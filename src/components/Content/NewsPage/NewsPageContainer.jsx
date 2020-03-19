import React, { Component } from 'react';
import NewsPage from './NewsPage';
import StroeContext from '../../../StoreContext';

class NewsPageContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let newsId = this.props.match.params.newsId;
        return (
            <StroeContext.Consumer>
                {
                    (store) => {
                        return (
                            <NewsPage newsId={newsId} news={store.getState().mainContent.newsPage.newsContent.news}/>
                        );
                    }
                }
            </StroeContext.Consumer>
        );
    }

}

export default NewsPageContainer;