/**
 * Created by nehat on 2/15/2016.
 */

import React from 'react';
import {render} from 'react-dom';
import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
//import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
import rootReducer from '../reducers/index';
import Routes from '../../Routes';

//import App from '../components/App';

const store = createStore(
    rootReducer,
//    Routes,
    applyMiddleware(thunk)
);
export default class DetailsPage extends React.Component {

    render(){

        return(
                <Provider store={store}>
                    <div>
                        Hello.....
                    </div>
                </Provider>


        );
    }
}
