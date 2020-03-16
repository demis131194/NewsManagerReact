import React, { Component } from 'react';
import NewsItem from './NewsItem/NewsItem';

class NewsList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let hardNews = [
            {
                "id": 1,
                "title": "Robokop",
                "shortText": "Short text 1",
                "fullText": "Full text 1",
                "creationDate": "2020-01-27 02:50:39.000",
                "modificationDate": "2020-02-25 11:53:25.229",
                "author": {
                    "id": 1,
                    "name": "Dima",
                    "surname": "Ford"
                },
                "tags": [
                    {
                        "id": 6,
                        "name": "My"
                    },
                    {
                        "id": 2,
                        "name": "Science"
                    },
                    {
                        "id": 3,
                        "name": "Comedy"
                    }
                ]
            },
            {
                "id": 11,
                "title": "Postgresql",
                "shortText": "Short text 11",
                "fullText": "Full text 11",
                "creationDate": "2020-01-01 00:49:39.000",
                "modificationDate": "2020-02-25 11:53:25.229",
                "author": {
                    "id": 1,
                    "name": "Dima",
                    "surname": "Ford"
                },
                "tags": [
                    {
                        "id": 7,
                        "name": "Dogs"
                    },
                    {
                        "id": 8,
                        "name": "Cats"
                    },
                    {
                        "id": 2,
                        "name": "Science"
                    },
                    {
                        "id": 3,
                        "name": "Comedy"
                    }
                ]
            }
        ];

        return (
            <div>
                {hardNews.map( news => <NewsItem news={news}/>)}
            </div>
        )
    }
}

export default NewsList;