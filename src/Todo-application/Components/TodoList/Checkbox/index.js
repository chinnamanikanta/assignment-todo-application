import React from 'react'
import './style.css'

const CheckBox = (props) => {
    const {handleIsComplete,todo} = props

    return (
        <div className="checkbox-container">
            <input type="checkbox" className="check" checked={todo.isComplete} onChange={()=>handleIsComplete(todo)}></input>
        </div>
    )

}

export default CheckBox