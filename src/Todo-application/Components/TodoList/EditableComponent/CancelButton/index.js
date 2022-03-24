import React from 'react';
import './style.css'

const CancelButton = (props) => {
    const {handleCancel,todoId} = props

    return (
        <div>
            <button type="button"  className="cancel-button" onClick={() => handleCancel(todoId)}>Cancel</button>
        </div>
    

    )
}

export default CancelButton