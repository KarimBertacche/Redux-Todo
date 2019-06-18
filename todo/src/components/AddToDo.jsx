import React from 'react';
import styled from 'styled-components';

const StylesAddToDo = styled.div`
    display: flex;
    width: 90%;
    height: 30px;
    margin: 0 auto;
    border: 3px solid #000;
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 20px;

    input {
        width: calc(100% - 30%);
        height: 29px;
        outline: none;
        font-size: 1.3rem;
        padding-left: 10px;
        text-align: center;
    }

    button {
        width: calc(100% - 75%);
        height: 32px;
        border-left: 3px solid #000;
        outline: none;
        margin-top: -1px;
        margin-right: -2px;
        font-weight: bold;
        font-size: 1.2rem;

        &:hover {
            background-color: #000;
            color: #fff;
        }
    }

`;

const AddToDo = props => {
    return(
        <StylesAddToDo>
            <input 
                type="text"
                value={props.value}
                onChange={props.inputHandler}
            />
            <button onClick={() => props.addNewTodo(props.addTodo)}>Add</button>
        </StylesAddToDo>
    );

} 

export default AddToDo;