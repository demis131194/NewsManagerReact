
const CHANGE_SELECTED_AUTHOR_ACTION_TYPE = 'CHANGE_SELECTED_AUTHOR';
const RESET_SEARCH_ACTION_TYPE = 'RESET_SEARCH';
const CHANGE_SELECTED_TAGS_ACTION_TYPE = 'CHANGE_SELECTED_TAGS';
const SET_TAGS = 'SET_TAGS';
const SET_AUTHORS = 'SET_AUTHORS';

let initiaState = {
    tags: [],
    authors: [],
    selectedTags: [
    ],
    selectedAuthor: null,
}

const searchNewsBarReducer = (state = initiaState, action) => {
    switch (action.type) {
        case CHANGE_SELECTED_AUTHOR_ACTION_TYPE:
            return {
                ...state,
                selectedAuthor: action.selectedAuthor,
            }
        case RESET_SEARCH_ACTION_TYPE:
            return {
                ...state,
                selectedAuthor: null,
                selectedTags: [],
            }
        case CHANGE_SELECTED_TAGS_ACTION_TYPE:
            return {
                ...state,
                selectedTags: action.selectedTags,
            }
        case SET_TAGS:
            return {
                ...state,
                tags: action.tags,
            }
        case SET_AUTHORS:
            return {
                ...state,
                authors: action.authors,
            }
        default:
            return state;
    }
}

export const changedSelectedAuthorActionCreator = (selectedOption) => ({
    type: CHANGE_SELECTED_AUTHOR_ACTION_TYPE,
    selectedAuthor: selectedOption ? selectedOption.value : null,
});

export const changedSelectedTagsActionCreator = (selectedOptions) => ({
    type: CHANGE_SELECTED_TAGS_ACTION_TYPE,
    selectedTags: selectedOptions ? selectedOptions.map(selectedTag => selectedTag.tag) : [],
});

export const resetSearchActionCreator = () => ({ type: RESET_SEARCH_ACTION_TYPE });

export const setTags = (tags) => ({
    type: SET_TAGS,
    tags: tags ? tags : [],
});

export const setAuthors = (authors) => ({
    type: SET_AUTHORS,
    authors: authors ? authors : [],
});

export default searchNewsBarReducer;