/**
 * Created by nehat on 2/11/2016.
 */

'use strict';

import React, {Component, View, Text} from 'react-native';
import {render} from 'react-dom'

import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import rootReducer from './js/reducers/index';

import App from './js/components/App'

import * as reducers from './js/reducers';

const reducer = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);


export default class app extends Component {
    render() {
        render(
            <Provider store={store}>
                <App />
            </Provider>,
            document.getElementById('main')
        );
    }
}
