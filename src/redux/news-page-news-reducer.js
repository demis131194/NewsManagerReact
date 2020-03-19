
let initiaState = {
    news: [
        {
            "id": 8,
            "title": "Warning",
            "shortText": "Short text 8",
            "fullText": "Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.",
            "creationDate": "2020-01-15 01:50:39.000",
            "modificationDate": "2020-02-09 21:25:55.529",
            "author": {
                "id": 7,
                "name": "Dima",
                "surname": "Ford"
            },
            "tags": [
                {
                    "id": 5,
                    "name": "Art"
                },
                {
                    "id": 6,
                    "name": "My"
                }
            ]
        },
        {
            "id": 2,
            "title": "WoRk",
            "shortText": "Short text 2",
            "fullText": "Full text 2",
            "creationDate": "2020-01-04 00:50:39.000",
            "modificationDate": "2020-02-09 21:25:55.529",
            "author": {
                "id": 7,
                "name": "Dima",
                "surname": "Ford"
            },
            "tags": [
                {
                    "id": 4,
                    "name": "Nature"
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
        },
        {
            "id": 3,
            "title": "work",
            "shortText": "Short text 3",
            "fullText": "Full text 3",
            "creationDate": "2020-01-02 00:50:39.000",
            "modificationDate": "2020-02-09 21:25:55.529",
            "author": {
                "id": 3,
                "name": "Sova",
                "surname": "Sovna"
            },
            "tags": [
                {
                    "id": 5,
                    "name": "Art"
                },
                {
                    "id": 8,
                    "name": "Cats"
                },
                {
                    "id": 3,
                    "name": "Comedy"
                }
            ]
        },
        {
            "id": 5,
            "title": "Boring",
            "shortText": "Short text 5",
            "fullText": "Full text 5",
            "creationDate": "2020-01-13 02:50:39.000",
            "modificationDate": "2020-02-09 21:25:55.529",
            "author": {
                "id": 5,
                "name": "Vasya",
                "surname": "Asin"
            },
            "tags": [
                {
                    "id": 5,
                    "name": "Art"
                },
                {
                    "id": 3,
                    "name": "Comedy"
                },
                {
                    "id": 1,
                    "name": "History"
                }
            ]
        },
        {
            "id": 6,
            "title": "Bomb shel",
            "shortText": "Short text 6",
            "fullText": "Full text 6",
            "creationDate": "2020-01-14 02:50:39.000",
            "modificationDate": "2020-02-09 21:25:55.529",
            "author": {
                "id": 8,
                "name": "Dima",
                "surname": "Jackson"
            },
            "tags": [
                {
                    "id": 7,
                    "name": "Dogs"
                },
                {
                    "id": 6,
                    "name": "My"
                },
                {
                    "id": 2,
                    "name": "Science"
                }
            ]
        },
        {
            "id": 9,
            "title": "JAVA core",
            "shortText": "Short text 9",
            "fullText": "Full text 9",
            "creationDate": "2020-01-21 02:50:39.000",
            "modificationDate": "2020-02-09 21:25:55.529",
            "author": {
                "id": 8,
                "name": "Dima",
                "surname": "Jackson"
            },
            "tags": [
                {
                    "id": 5,
                    "name": "Art"
                },
                {
                    "id": 6,
                    "name": "My"
                },
                {
                    "id": 2,
                    "name": "Science"
                }
            ]
        },
        {
            "id": 7,
            "title": "UFO",
            "shortText": "Short text 7",
            "fullText": "Full text 7",
            "creationDate": "2020-01-17 02:50:39.000",
            "modificationDate": "2020-02-09 21:25:55.529",
            "author": {
                "id": 4,
                "name": "Artem",
                "surname": "Hlebny"
            },
            "tags": [
                {
                    "id": 2,
                    "name": "Science"
                },
                {
                    "id": 3,
                    "name": "Comedy"
                },
                {
                    "id": 1,
                    "name": "History"
                }
            ]
        },
        {
            "id": 4,
            "title": "News",
            "shortText": "Short text 4",
            "fullText": "Full text 4",
            "creationDate": "2020-01-10 00:50:39.000",
            "modificationDate": "2020-02-09 21:25:55.529",
            "author": {
                "id": 4,
                "name": "Artem",
                "surname": "Hlebny"
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
                },
                {
                    "id": 1,
                    "name": "History"
                }
            ]
        }
    ]
}

const newsPageNewsReducer = (state = initiaState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default newsPageNewsReducer;