/**
 * Created by nehat on 2/9/2016.
 */

import React from 'react'
import constant from '../constants/constant'


export function addTodo(unique, data, dataExists) {
    return dispatch => {
        dispatch({type: constant.ADD_TODO, todo_id:unique , todoName: data, selectedTodo_id:dataExists});
    }
}

export function editTodo(data,unique) {
    return dispatch => {
        dispatch({type: constant.EDIT_TODO, id: data.id, todo_id:unique});
    }
}

export function deleteTodo(data, unique) {
    return dispatch => {
        dispatch({type: constant.DELETE_TODO, id: data.id, todo_id:unique});
    }
}

export function completeTodo(data, unique) {
    return dispatch => {
        dispatch({type: constant.COMPLETE_TODO, id: data.id, todo_id:unique});
    }
}

export function clearTodo() {
    return dispatch => {
        dispatch({type: constant.CLEAR_TODO});
    }
}


