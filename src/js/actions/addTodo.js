/**
 * Created by nehat on 2/8/2016.
 */

import constant from '../constants/constant'

const addTodo = (object) => {

    return{
        type:constant.ADD_TODO,
        id : object.id,
        todoName: object.todoName
    }

};

export default addTodo


/*
import constant from '../constants/constant'

export function addTodo(object){

    return {
        type: constant.ADD_TODO,
        id : object.id,
        todoName: object.todoName
    }
}
*/
