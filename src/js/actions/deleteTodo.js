/**
 * Created by nehat on 2/8/2016.
 */


import constant from '../constants/constant'

const deleteTodo = (object) => {

    return{
        type: constant.DELETE_TODO,
        id : object.id
    }

};

export default deleteTodo



/*
import constant from '../constants/constant'

export function deleteTodo(object){
    return{
        type: constant.DELETE_TODO,
        id : object.id,
        todoName: object.todoName
    }
}
*/


