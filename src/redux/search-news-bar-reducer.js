const CHANGE_SELECTED_AUTHOR_ACTION_TYPE = 'CHANGE_AUTHOR_SELECT';
const RESET_SEARCH_ACTION_TYPE = 'RESET_SEARCH';
const CHANGE_SELECTED_TAGS_ACTION_TYPE = 'CHANGE_TAGS_SELECT';

let initiaState = {
    tags: [
        {
            "id": 1,
            "name": "History"
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
            "id": 4,
            "name": "Nature"
        },
        {
            "id": 5,
            "name": "Art"
        },
        {
            "id": 6,
            "name": "My"
        },
        {
            "id": 7,
            "name": "Dogs"
        },
        {
            "id": 8,
            "name": "Cats"
        }
    ],
    authors: [
        {
            "id": 2,
            "name": "Vasya",
            "surname": "Pupkin"
        },
        {
            "id": 3,
            "name": "Sova",
            "surname": "Sovna"
        },
        {
            "id": 4,
            "name": "Artem",
            "surname": "Hlebny"
        },
        {
            "id": 5,
            "name": "Vasya",
            "surname": "Asin"
        },
        {
            "id": 6,
            "name": "Nikita",
            "surname": "Semenov"
        },
        {
            "id": 7,
            "name": "Dima",
            "surname": "Ford"
        },
        {
            "id": 8,
            "name": "Dima",
            "surname": "Jackson"
        }
    ],
    selectedTags: [
    ],
    selectedAuthor: null,
}

const searchNewsBarReducer = (state = initiaState, action) => {
    switch (action.type) {
        case CHANGE_SELECTED_AUTHOR_ACTION_TYPE:
            state.selectedAuthor = action.selectedAuthor;
            return state;
        case RESET_SEARCH_ACTION_TYPE:
            state.selectedAuthor = null;
            state.selectedTags = [];
            return state;
        case CHANGE_SELECTED_TAGS_ACTION_TYPE:
            state.selectedTags = action.selectedTags;
            return state;
        default:
            return state;
    }
}

export const changedSelectedAuthorActionCreator = (selectedOption) => ({
    type: CHANGE_SELECTED_AUTHOR_ACTION_TYPE,
    selectedAuthor: selectedOption.value,
});

export const changedSelectedTagsActionCreator = (selectedOptions) => ({
    type: CHANGE_SELECTED_TAGS_ACTION_TYPE,
    selectedTags: selectedOptions.map(selectedTag => selectedTag.value),
});

export const resetSearchActionCreator = () => ({ type: RESET_SEARCH_ACTION_TYPE });

export default searchNewsBarReducer;