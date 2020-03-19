import React from 'react';
import { render } from 'react-dom';
import App from './components/App'
import store from './redux/redux-store'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from './StoreContext';

let renderTree = () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
        , document.getElementById('root')

    );
}

renderTree();

store.subscribe(renderTree);