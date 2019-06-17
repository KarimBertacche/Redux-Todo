import React from 'react';

const AddToDo = props => {
    return(
        <div>
            <input 
                type="text"
                value={props.value}
                onChange={props.inputHandler}
            />
            <button onClick={() => props.onAddTodo(props.value)}>Add Todo</button>
        </div>
    );

} 

export default AddToDo;