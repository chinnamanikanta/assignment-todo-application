import { ADD_TODO,COMPLETE_TODO,DELETE_TODO, EDIT_TODO, UPDATE_TODO } from "../ActionTypes/todoActiontypes";


export function addTodo(dispatch,todo) {

    dispatch({type:ADD_TODO,todo})
}

export function deleteTodoFromList(dispatch,id) {
    dispatch({type:DELETE_TODO,id})
}

export function completeTodo(dispatch,id) {
    dispatch({type:COMPLETE_TODO,id})
}

export function editClickTodo(dispatch,id) {
    dispatch({type:EDIT_TODO,id})
}

export function updateTodoInList(dispatch,todoObj) {
    dispatch({type:UPDATE_TODO,todoObj})

}