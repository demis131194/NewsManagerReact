import React from 'react';
import { render } from 'react-dom';
import App from './components/App'
import store from './redux/redux-store'

let renderTree = () => {
    render(<App store={store} />, document.getElementById('root'));
}

renderTree();

store.subscribe(renderTree);