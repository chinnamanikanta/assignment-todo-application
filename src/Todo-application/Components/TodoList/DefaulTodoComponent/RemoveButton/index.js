import React from 'react';
import './style.css'

const RemoveButton = (props) => {
    const {handleDelete,todoId} = props

    return (
        <div>
            <button type="button" onClick={() => handleDelete(todoId)} className="remove-button">Remove</button>
        </div>
    )

}

export default RemoveButton