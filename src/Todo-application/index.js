import React from 'react';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import './style.css'

const TodoApp = () => {

    return(

        <div className="todo-container">
            <div className="title">Todo List</div>
            <TodoForm/>
            <TodoList/>

        </div>
    )

}

export default TodoApp