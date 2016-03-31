/**
 * Created by nehat on 2/8/2016.
 */

import React from 'react';
import constant from '../constants/constant';
import todo from '../reducers/todo';
import { connect } from 'react-redux';
import * as todo_action from './../actions';
import {bindActionCreators} from 'redux';
import ReactDOM from 'react-dom';
import TodoList from '../container/TodoList';

let cnt = 4;

class TodoUserInput extends React.Component{

    constructor(){
        super();
        this.state={todoName: ""}
    }

    onClear(){
        this.props.todoAction.clearTodo();
        this.setState({todoName: ""});
    }

    handleEnter(event){
        if(event.key == "Enter"){
            this.onSubmit();
        }
    }

    handleTextChange(event){
        this.setState({todoName: event.target.value.trim()});
    }

    onSubmit(){
        let todoName;
        todoName = ReactDOM.findDOMNode(this.refs.todoName).value;
        this.props.todoAction.addTodo(cnt++,todoName,this.props.selectedTodo_id);
        this.onClear();
    }

    render(){
        var check_null = (this.props.selectedTodo == "undefined") ? (
            alert("Sorry this data does not exists...")
        ) : (this.props.selectedTodo);

        var selected_Todo = (this.props.flag == true) ? (check_null) : null;
        var SELECTED_TODO = (selected_Todo == this.state.todoName || this.state.todoName == "") ? selected_Todo : this.state.todoName;

        return(
            <div className="col-sm-8 well">
                <div className="col-sm-8">
                    <input ref="todoName" className="form-control" value={SELECTED_TODO}
                           onKeyPress={this.handleEnter.bind(this)}
                           onChange={this.handleTextChange.bind(this)}
                           contentEditable="true" placeholder="Todo Name" />
                </div>
                <div className="col-sm-4">
                    <button  onClick={this.onSubmit.bind(this)}> Submit </button>
                    <button  onClick={this.onClear.bind(this)}> Clear </button>
                </div>
            </div>
        )
    }
}



let bindToProps = state => ({

});

let bindActions = (dispatch) => ({
    todoAction: bindActionCreators(todo_action, dispatch)
});

export default connect(bindToProps,bindActions)(TodoUserInput);

//export default connect(bindActions)(TodoUserInput);