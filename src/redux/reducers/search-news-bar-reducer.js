import * as types from '../constants/action-type-constants.js'

let initiaState = {
    tags: [],
    authors: [],
    selectedTags: [
    ],
    selectedAuthor: null,
}

const searchNewsBarReducer = (state = initiaState, action) => {
    switch (action.type) {
        case types.CHANGE_SELECTED_AUTHOR_ACTION_TYPE:
            return {
                ...state,
                selectedAuthor: action.selectedAuthor,
            }
        case types.RESET_SEARCH_ACTION_TYPE:
            return {
                ...state,
                selectedAuthor: null,
                selectedTags: [],
            }
        case types.CHANGE_SELECTED_TAGS_ACTION_TYPE:
            return {
                ...state,
                selectedTags: action.selectedTags,
            }
        case types.SET_TAGS_ACTION_TYPE:
            return {
                ...state,
                tags: action.tags,
            }
        case types.SET_AUTHORS_ACTION_TYPE:
            return {
                ...state,
                authors: action.authors,
            }
        default:
            return state;
    }
}

export const changedSelectedAuthorActionCreator = (selectedOption) => ({
    type: types.CHANGE_SELECTED_AUTHOR_ACTION_TYPE,
    selectedAuthor: selectedOption ? selectedOption.value : null,
});

export const changedSelectedTagsActionCreator = (selectedOptions) => ({
    type: types.CHANGE_SELECTED_TAGS_ACTION_TYPE,
    selectedTags: selectedOptions ? selectedOptions.map(selectedTag => selectedTag.tag) : [],
});

export const resetSearchActionCreator = () => ({ type: types.RESET_SEARCH_ACTION_TYPE });

export const setTagsActionCreator = (tags) => ({
    type: types.SET_TAGS_ACTION_TYPE,
    tags: tags ? tags : [],
});

export const setAuthorsActionCreator = (authors) => ({
    type: types.SET_AUTHORS_ACTION_TYPE,
    authors: authors ? authors : [],
});

export default searchNewsBarReducer;