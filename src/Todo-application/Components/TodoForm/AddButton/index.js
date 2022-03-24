import React from 'react';
import './style.css'
const AddButton = (props) => {
    const {handleAddTodo} = props
    return (
        <div className="">
            <button type="button" className="add-button" onClick={() => handleAddTodo()}>Add</button>
        </div>
    )

}

export default AddButton