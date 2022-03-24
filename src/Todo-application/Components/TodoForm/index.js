import React, { useState } from 'react';
import { addTodo } from '../../Redux/Actions/todoActions';
import AddButton from './AddButton';
import { useDispatch, useSelector } from 'react-redux';
import TodoFormComponent from './InputComponent';
import './style.css'

const TodoForm = () => {
    const dispatch = useDispatch()
    const [inputTodo,setInputTodo] = useState("")

    const handleChangeInput = (e) => {
        setInputTodo(e.target.value)

    }

    const handleKeyPress = (e) => {
        if(e.keyCode === 13) {
            if(inputTodo === "") {

                window.alert("Please add Todo!")
                return;
            }
            addTodo(dispatch,inputTodo)
            setInputTodo("")

        }

    }

    const handleAddTodo = () => {
        if(inputTodo === "") {
        alert("please enter todo");
        return;
        }
        addTodo(dispatch,inputTodo)
        setInputTodo("")
    }

    return(
        <div className="todo-form-container">
            <TodoFormComponent inputValue={inputTodo} handleChangeInput={handleChangeInput} onHandleKeyPress={handleKeyPress}/>
            <AddButton handleAddTodo={handleAddTodo}/>
            
        </div>
    )

}

export default TodoForm