/**
 * Created by nehat on 2/8/2016.
 */


import constant from '../constants/constant'

const editTodo = (object) => {

    return{
        type: constant.EDIT_TODO,
        id : object.id,
        todoName: object.todoName
    }

};

export default editTodo



/*
import constant from '../constants/constant'

export function editTodo(object){
    return{
        type: constant.EDIT_TODO,
        id : object.id,
        todoName: object.todoName
    }
}
*/