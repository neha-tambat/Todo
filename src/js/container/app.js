/**
 * Created by nehat on 2/12/2016.
 */

'use strict';

import React from 'react';
import {render} from 'react-dom';
import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import Routes from '../../Routes';

import App from '../components/App';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default class app extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <App dataToLoad={this.props.children}/>
            </Provider>
        );
    }
}


