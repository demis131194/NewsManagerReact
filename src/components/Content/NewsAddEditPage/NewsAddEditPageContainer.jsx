import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsAddEditPage from './NewsAddEditPage';
import * as axios from 'axios';
import { setAddEditNewsActionCreator } from '../../../redux/reducers/news-add-edit-reducer';

class NewsAddEditPageApiContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <NewsAddEditPage {...this.props.newAddEditPage}
            onCurrentTitleChange={this.onCurrentTitleChange.bind(this)}
            onCurrentShortTextChange={this.onCurrentShortTextChange.bind(this)}
            onCurrentFullTextChange={this.onCurrentFullTextChange.bind(this)}
            onCurrentTagsChange={this.onCurrentTagsChange.bind(this)}
            onCurrentTagsCreate={this.onCurrentTagsCreate.bind(this)}
            onCancelClick={this.onCancelClick.bind(this)}
            onAcceptClick={this.onAcceptClick.bind(this)}
        />
    }

    componentDidMount() {
        axios.get('http://localhost:8080/news-manager/tags')
            .then(response => this.props.setTagOptions(response.data));
    }

    onCurrentTitleChange(e) {
        let title = e.target.value;
        this.props.setCurrentTitle(title);
    }

    onCurrentShortTextChange(e) {
        let shortText = e.target.value;
        this.props.setCurrentShortText(shortText);
    }

    onCurrentFullTextChange(e) {
        let fullText = e.target.value;
        this.props.setCurrentFullText(fullText);
    }

    onCurrentTagsChange(selectedTagsOptions) {
        let tags = selectedTagsOptions ? selectedTagsOptions.map(tagOption => tagOption.value) : [];
        this.props.setCurrentTags(tags);
    }

    onCurrentTagsCreate(tagName) {
        let newTag = { id: null, name: tagName }
        let curTags = [...this.props.newAddEditPage.currentTags, newTag]
        this.props.setCurrentTags(curTags);
    }

    onCancelClick() {
        debugger;
        this.props.setCurrentTitle('');
        this.props.setCurrentShortText('');
        this.props.setCurrentFullText('');
        this.props.setCurrentTags([]);
        this.props.history.goBack();
    }

    onAcceptClick() {
        let news = {
            id: this.props.newAddEditPage.newsId,
            title: this.props.newAddEditPage.currentTitleText,
            shortText: this.props.newAddEditPage.currentShortText,
            fullText: this.props.newAddEditPage.currentFullText,
            author: this.props.newAddEditPage.currentAuthor,
            tags: this.props.newAddEditPage.currentTags,
        }
        axios.post('http://localhost:8080/news-manager/news', news)
            .then(response => {
                if (response.status === 200) {
                    this.props.setCurrentTitle('');
                    this.props.setCurrentShortText('');
                    this.props.setCurrentFullText('');
                    this.props.setCurrentTags([]);
                    this.props.history.push('/');
                }
            });

    }

}

let mapStateToProps = (state, own) => {
    return {
        newAddEditPage: state.newAddEditPage,
        history: own.history,
        newsId: own.newsId,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setTagOptions: (tagsOptions) => {
            let data = { tagsOptions: tagsOptions };
            let action = setAddEditNewsActionCreator(data);
            dispatch(action);
        },
        setCurrentTitle: (title) => {
            let data = { currentTitleText: title };
            let action = setAddEditNewsActionCreator(data);
            dispatch(action);
        },
        setCurrentShortText: (shortText) => {
            let data = { currentShortText: shortText };
            let action = setAddEditNewsActionCreator(data);
            dispatch(action);
        },
        setCurrentFullText: (fullText) => {
            let data = { currentFullText: fullText };
            let action = setAddEditNewsActionCreator(data);
            dispatch(action);
        },
        setCurrentTags: (tags) => {
            let data = { currentTags: tags };
            let action = setAddEditNewsActionCreator(data);
            dispatch(action);
        }
    }
}

let NewsAddEditPageContainer = connect(mapStateToProps, mapDispatchToProps)(NewsAddEditPageApiContainer);

export default NewsAddEditPageContainer;