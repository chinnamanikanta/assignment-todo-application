import React, { useEffect, useState } from 'react';
import { useDispatch} from 'react-redux';
import { editClickTodo, updateTodoInList } from '../../../Redux/Actions/todoActions';
import CancelButton from './CancelButton';
import EditInputComponent from './EditInputComponent';
import './style.css'
import UpdateButton from './UpdateButton';
const EditableTodoComponent = (props) => {
    const {todo} = props
    const dispatch = useDispatch()
    const [todoInputValue,setTodoInputValue] = useState(todo.name)

    const handleCancel = (id) => {
        editClickTodo(dispatch,id)

    }

    const handleOnchangeTodoInpt = (e) => {
        setTodoInputValue(e.target.value)

    }

    const handleUpdateTodo = (id) => {
        if(todoInputValue === "") {

            window.alert("Please update todo value!")
            return;

        }
        const todoObj = {
            id,
            text:todoInputValue
        }

        updateTodoInList(dispatch,todoObj)
        editClickTodo(dispatch,todo.id)

    }

    const handleOnKeyPress = (e) => {
        if(e.keyCode === 13) {
            if(todoInputValue === "") {
                window.alert("Please update todo value!")
                return;
            }

            const todoObj = {
                id:todo.id,
                text:todoInputValue
            }

            updateTodoInList(dispatch,todoObj)
            editClickTodo(dispatch,todo.id)
        }

    }



    return (
        <div className="edit-todo-container">
            <EditInputComponent inputValue={todoInputValue} handleOnchangeTodoInpt={handleOnchangeTodoInpt} handleOnKeyPress={handleOnKeyPress}/>
            <UpdateButton todoId={todo.id} handleUpdateTodo={handleUpdateTodo}/>
            <CancelButton todoId={todo.id} handleCancel={handleCancel}/>

        </div>
    )

}

export default EditableTodoComponent