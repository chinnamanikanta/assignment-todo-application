import React from 'react';
import { useDispatch } from 'react-redux';
import { completeTodo, deleteTodoFromList, editClickTodo } from '../../../Redux/Actions/todoActions';
import CheckBox from '../Checkbox';
import RemoveButton from './RemoveButton';
import './style.css'


const DefaulTodoComponent = (props) => {

    const {todo} = props

    const dispatch = useDispatch()
    
    const handleIsComplete = (id) => {

        completeTodo(dispatch,id)

    }

    const handleDelete = (id) => {
        deleteTodoFromList(dispatch,id)

    }

    const handleEditClick = (id) => {
        editClickTodo(dispatch,id)

    }

    return (
        <div className="todo-list-header">
        <CheckBox todo={todo} handleIsComplete={() => handleIsComplete(todo.id)}/>
        <div className={!todo.isComplete ? "todo-title" : "after-todo-title"} onClick={() => handleEditClick(todo.id)}>{todo.name}</div>
        <RemoveButton todoId={todo.id} handleDelete={handleDelete}/>
        
        </div>
    )

}

export default DefaulTodoComponent