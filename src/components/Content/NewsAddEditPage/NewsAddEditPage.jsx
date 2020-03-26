import React from 'react';
import style from './NewsAddEditPage.module.css';
import CreatableSelect from 'react-select/creatable';
import data from '../../../redux/database'

let NewsAddEditPage = (props) => {
    let tagOptions = props.tagsOptions.map(tag => ({ label: tag.name, value: tag }));
    let currentTags = props.currentTags.map(tag => ({ label: tag.name, value: tag }));

    return (
        <form onSubmit={(e) => { e.preventDefault(); props.onAcceptClick()}} className={style.addNews}>
            <div className="text-center mb-4">
                <h1 className="h3 mb-3 font-weight-normal">Your post</h1>
                <p>Write your post here.</p>
            </div>

            <div className="form-label-group mt-1">
                <label htmlFor="inputTitle">Title:</label>
                <input type="text" id="inputTitle" className="form-control" placeholder="Title"
                    required={true} autoFocus="" value={props.currentTitleText} onChange={props.onCurrentTitleChange}/>
            </div>

            <div className="form-label-group mt-1" >
                <label htmlFor="inputShortText">Short text:</label>
                <textarea id="inputShortText" className={"form-control " + style.shortText} 
                placeholder="Short text" required={true} value={props.currentShortText} onChange={props.onCurrentShortTextChange}/>
            </div>

            <div className="form-label-group mt-1">
                <label htmlFor="inputFullText">Full text:</label>
                <textarea id="inputFullText" className={"form-control " + style.fullText} placeholder="Full text"
                 required={true} value={props.currentFullText} onChange={props.onCurrentFullTextChange} />
            </div>

            <div className="form-label-group mt-1">
                <label htmlFor="inputTags">Select or create tags:</label>
                <CreatableSelect
                    id='inputTags'
                    isMulti
                    onChange={props.onCurrentTagsChange}
                    onCreateOption={props.onCurrentTagsCreate}
                    options={tagOptions}
                    value={currentTags}
                />
            </div>

            <button className="btn btn-lg btn-primary btn-block mt-2 w-25 d-inline p-2 mr-1" type="submit" >Post</button>
            <button className="btn btn-lg btn-danger btn-block mt-2 w-25 d-inline p-2 ml-1" type="reset" onClick={props.onCancelClick}>Cancel</button>

        </form>
    )
}

export default NewsAddEditPage;