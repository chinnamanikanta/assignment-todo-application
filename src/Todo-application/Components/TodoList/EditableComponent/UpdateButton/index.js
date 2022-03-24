import React from 'react';
import './style.css'
const UpdateButton = (props) => {

    const {handleUpdateTodo, todoId} = props
    
    return (
        <div>
            <button type="button" className="update-button" onClick={() => handleUpdateTodo(todoId)}>Update</button>
        </div>
    )

}

export default UpdateButton