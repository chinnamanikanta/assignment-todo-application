import React from 'react';
import './style.css'

const EditInputComponent = (props) => {
const {inputValue,handleOnchangeTodoInpt,handleOnKeyPress} = props

    return (
        <div>
            <input type="text" className="each-edit-input"  value={inputValue} onChange={(e) => handleOnchangeTodoInpt(e)} onKeyUp={(e) => handleOnKeyPress(e)}/>
        </div>
    )
}
// value={inputValue} onKeyUp={(e) => onHandleKeyPress(e)} onChange={(e) => handleChangeInput(e)}

export default EditInputComponent