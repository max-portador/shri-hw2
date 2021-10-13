import React from 'react';
import {render} from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import {compose, createStore} from "redux";
import {Provider} from "react-redux";
import {rootReducer} from "./redux/rootReducer";
import './style.css';

const store = createStore(
    rootReducer,
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)
render(app, document.getElementById('root'))

reportWebVitals();
