/**
 * Created by nehat on 2/8/2016.
 */

import React from 'react'
import _ from 'lodash';
import constant from '../constants/constant'

const initialState = {
    selectedTodo : "none", selectedTodo_id : "none", flag: false,
    Todo_Information:[{id:0, todo_id:1, todoName: "Pune", complete:false},
                        {id:1, todo_id:2, todoName: "Mumbai", complete:false},
                        {id:2, todo_id:3, todoName: "Nashik", complete:false}]
};

const todo = (state=initialState , action) => {

        switch (action.type) {

            case constant.ADD_TODO :
                var addTodo =  _.assign({}, state);

                if(action.selectedTodo_id == "none"){
                    if(action.todoName == ""){
                        alert("Enter Todo");
                        return addTodo;
                    }else{
                        addTodo.Todo_Information.push({id:addTodo.Todo_Information.length ,
                            todo_id:action.todo_id, todoName: action.todoName, complete: false });
                    }
                }else{
                    for (var p=0; p < addTodo.Todo_Information.length ;p++){
                        if(addTodo.Todo_Information[p].id == action.selectedTodo_id){
                            addTodo.Todo_Information[p].todoName = action.todoName;
                            break;
                        }
                    }
                }
                return addTodo;

            case constant.EDIT_TODO :
                var newState = _.assign({},state);
               for (var i=0; i<newState.Todo_Information.length ;i++){
                   if(newState.Todo_Information[i].id == action.id){
                       var name = newState.Todo_Information[i].todoName;
                       var id = i;
                       break;
                   }
               }
                newState.selectedTodo = name;
                newState.selectedTodo_id = id;
                newState.flag = true;
                return newState;

            case constant.DELETE_TODO :
                var deleteTodo = _.assign({},state);
                deleteTodo.Todo_Information.splice(action.id, 1);
                for(var j=0; j < deleteTodo.Todo_Information.length; j++){
                    if(deleteTodo.Todo_Information[j].id != j){
                        deleteTodo.Todo_Information[j].id = j;
                    }
                }
                return deleteTodo;

            case constant.COMPLETE_TODO :
                var completeTodo = _.assign({},state);
                for(var k=0; k < completeTodo.Todo_Information.length; k++){
                    if(completeTodo.Todo_Information[k].id == action.id){
                        if(completeTodo.Todo_Information[k].complete == true){
                            completeTodo.Todo_Information[k].complete = false;
                        }else{
                            completeTodo.Todo_Information[k].complete = true;
                        }
                    }
                }
                return completeTodo;

            case constant.CLEAR_TODO :
                var clearTodo = _.assign({},state);
                clearTodo.selectedTodo = "none";
                clearTodo.selectedTodo_id = "none";
                clearTodo.flag = false;
                return clearTodo;

            default :
                return state;
        }
};

export default todo


