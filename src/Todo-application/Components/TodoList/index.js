import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.css'
import DefaulTodoComponent from './DefaulTodoComponent';
import EditableTodoComponent from './EditableComponent';

const TodoList = () => {

    const todoList = useSelector((state) => state.todoReducer.todoList)


    return (
        <div className="todo-list-container">
            {
                todoList && todoList.map((todo) => {
                    if(todo.isEdit) {
                        return (
                            <EditableTodoComponent key={todo.id} todo={todo}/>

                        )

                    }
                    else {
                    return (
                        <DefaulTodoComponent key={todo.id} todo={todo}/>
                         

                    )
                    }
                })
            }

            {
                todoList.length === 0 && <div className="empty-list">No Todos, Please add todo!</div>
            }



        </div>
    )

}

export default TodoList