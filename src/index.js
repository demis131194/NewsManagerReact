import React from 'react';
import {render} from 'react-dom';
// import App from './components/App'
import state from './redux/state'
// import {changeSelectedAuthorEvent} from './redux/state'
import { renderTree } from './render'

// render(<App state={state} chAuthEvent={changeSelectedAuthorEvent}/>, document.getElementById('root'));
renderTree(state);