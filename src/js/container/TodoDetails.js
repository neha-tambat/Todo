/**
 * Created by nehat on 2/8/2016.
 */

import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import * as todo_action from './../actions';
import TodoDetailsPage from './TodoDetailsPage';

class TodoDetails extends React.Component{

    render(){
        var Todo_Information = this.props.Todo_Information;
        var todo_Id = this.props.params.id;

        for(var t=0; t < Todo_Information.length; t++){
            if(todo_Id == Todo_Information[t].id){
                var todo_Name = Todo_Information[t].todoName;
            }
        }

        return(
           <div className="container">
               <div className="page-header">
                   <Link to="/" > Back </Link>
               </div>
                <div className="row">
                    <TodoDetailsPage todo_Id={todo_Id} todo_Name={todo_Name} />
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

export default connect(bindToProps)(TodoDetails);

