import React from 'react';
import {render} from 'react-dom';
import App from './components/App'
import state from './redux/state'


render(<App state={state}/>, document.getElementById('root'));