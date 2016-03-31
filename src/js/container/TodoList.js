/**
 * Created by nehat on 2/8/2016.
 */

import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import ReactDOM from 'react-dom';
import * as todo_action from './../actions';
import ListOfTodo from './ListOfTodo';

class TodoList extends React.Component{

    handleEditTodo(event){
        this.props.todoAction.editTodo({id:event.id});
    }

    handleDeleteTodo(event){
        this.props.todoAction.deleteTodo({id:event.id});
    }

    handleCompleteTodo(event){
        this.props.todoAction.completeTodo({id:event.id});
    }

    render() {
        var Todo_Information = this.props.Todo_Information;
         return(
            <div>
                <ListOfTodo Todo_Information={Todo_Information}
                            handleDeleteTodo={this.handleDeleteTodo.bind(this)}
                            handleCompleteTodo={this.handleCompleteTodo.bind(this)}
                            handleEditTodo={this.handleEditTodo.bind(this)} />
            </div>
        )
    }
}


let bindToProps = state => ({

});

let bindActions = (dispatch) => ({
    todoAction: bindActionCreators(todo_action, dispatch)
});

export default connect(bindToProps, bindActions)(TodoList);


//export default connect()(TodoList);
