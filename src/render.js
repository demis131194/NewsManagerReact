import React from 'react';
import {render} from 'react-dom';
import App from './components/App'
import {changeSelectedAuthorEvent} from './redux/state'

export let renderTree = (state) => render(<App state={state} chAuthEvent={changeSelectedAuthorEvent}/>, document.getElementById('root'));