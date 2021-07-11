import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
// import { createStore } from 'redux';
// import rootReducer from './reducers/rootReducer';

import './index.css';
import App from './App';

// const store = createStore(
//     rootReducer,
//     undefined /* preloadedState, */,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);