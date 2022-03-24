import React from 'react';
import './style.css'

const TodoFormComponent = (props) => {
    const {handleChangeInput,inputValue,onHandleKeyPress} = props
    return (
        <div className="todo-form-class">
            <input type="text" className="todo-input" placeholder='Add Todo' onChange={(e) => handleChangeInput(e)} value={inputValue} onKeyUp={(e) => onHandleKeyPress(e)}/>
        </div>
    )

}

export default TodoFormComponent