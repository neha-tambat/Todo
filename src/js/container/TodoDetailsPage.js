/**
 * Created by nehat on 2/12/2016.
 */

import React from 'react';
import { connect } from 'react-redux';
import editTodo from '../actions/editTodo';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import * as todo_action from './../actions';

class TodoDetailsPage extends React.Component {

    render(){
        var todo_Name = this.props.todo_Name;
        var todo_Id = this.props.todo_Id;
        return(
            <div className="col-sm-4">
                <div className="formPanel well">
                    <form className="form-horizontal" role="form">
                        <div className="form-group">
                                <label htmlFor="todo_name">Todo Details:</label>
                                <br />
                                <input type="text" value={todo_Name} className="form-control" readOnly />
                                <br />
                                <input type="text" value={todo_Id} className="form-control" readOnly />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}



let bindActions = (dispatch) => ({
    todoAction: bindActionCreators(todo_action, dispatch)
});

export default connect(bindActions)(TodoDetailsPage);

