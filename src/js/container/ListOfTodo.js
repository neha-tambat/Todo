/**
 * Created by nehat on 2/12/2016.
 */


import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import ReactDOM from 'react-dom';
import * as todo_action from './../actions';

class ListOfTodo extends React.Component{

    handleEditTodo(event){
        this.props.handleEditTodo({id:event.id});
    }

    handleDeleteTodo(event){
        this.props.handleDeleteTodo({id:event.id});
    }

    handleCompleteTodo(event){
        this.props.handleCompleteTodo({id:event.id});
    }

    render() {
        var Todo_Information = this.props.Todo_Information;

        if (Todo_Information.length == 0) {
            var List = "Todo List is empty...";
        } else{
            var List = Todo_Information.map((data) => {

                return (
                    <ListItemWrapper key={data.id} data={data} id={data.id}
                                     handleDeleteTodo={this.handleDeleteTodo.bind(this)}
                                     handleCompleteTodo={this.handleCompleteTodo.bind(this)}
                                     handleEditTodo={this.handleEditTodo.bind(this)} />
                );
            });
        }

        return(
            <div>
                {List}
            </div>
        )
    }
}

export default class ListItemWrapper extends React.Component {

    handleEditTodo(event){
        this.props.handleEditTodo({id:event.target.id});
    }

    handleDeleteTodo(event){
        this.props.handleDeleteTodo({id:event.target.id});
    }

    handleCompleteTodo(event){
        this.props.handleCompleteTodo({id:event.target.id});
    }

    render() {
        var disabled_status = this.props.data.complete ? "disabled" : "" ;
        return (
            <div className="row">
                <div className="col-sm-3" >
                    <li style={{textDecoration: this.props.data.complete ? 'line-through' : 'none'}} >
                        <Link to={"TodoDetails/" + this.props.data.id} > {this.props.data.todoName} </Link>
                    </li>
                </div>
                <div className="col-sm-4" >
                    <button type="button" id={this.props.data.id} disabled={disabled_status} onClick={this.handleEditTodo.bind(this)} > Edit </button>
                    <button type="button" id={this.props.data.id}  onClick={this.handleCompleteTodo.bind(this)} > Complete </button>
                    <button type="button" id={this.props.data.id} disabled={disabled_status} onClick={this.handleDeleteTodo.bind(this)} > Delete </button>
                </div>
            </div>
        );
    }
}


let bindActions = (dispatch) => ({
    todoAction: bindActionCreators(todo_action, dispatch)
});

export default connect(bindActions)(ListOfTodo);
