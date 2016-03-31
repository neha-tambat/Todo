/**
 * Created by nehat on 2/8/2016.
 */

import React from 'react';
import TodoUserInput from '../container/TodoUserInput';
import {bindActionCreators} from 'redux';
import TodoList from '../container/TodoList';
import TodoDetails from '../container/TodoDetails';
import ListOfTodo from '../container/ListOfTodo';
import todo from '../reducers/todo';
import { connect } from 'react-redux';
import * as todo_action from './../actions';

class App extends React.Component{

    render(){
        var Todo_Information = this.props.Todo_Information;
        var selectedTodo = this.props.selectedTodo;
        var selectedTodo_id = this.props.selectedTodo_id;
        var flag = this.props.flag;

        if(this.props.dataToLoad) {
            return (
                <div className="container">
                    {this.props.dataToLoad}
                </div>
            );
        }

        return(
            <div className="container">
                <div className="page-header text-center"> <strong>Todo Application :</strong> </div>
                <div className="row">
                    <TodoUserInput selectedTodo={selectedTodo} flag={flag} selectedTodo_id={selectedTodo_id} />
                </div>
                <div className="row">
                    <TodoList Todo_Information={Todo_Information} />
                </div>
            </div>
        )
    }
}


let bindToProps = state => ({
    Todo_Information: state.reducer.Todo_Information,
    selectedTodo : state.reducer.selectedTodo,
    selectedTodo_id : state.reducer.selectedTodo_id,
    flag : state.reducer.flag
});

export default connect(bindToProps)(App);


