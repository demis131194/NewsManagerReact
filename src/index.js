import React from 'react';
import { render } from 'react-dom';
import App from './components/App'
import store from './redux/redux-store'

let renderTree = (state) => {
    render(<App state={state} dispatch={store.dispatch.bind(store)} />, document.getElementById('root'));
}

renderTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    renderTree(state);
});