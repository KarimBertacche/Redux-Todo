import React from 'react';
import styled from 'styled-components';

const StylesToDoList = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    padding-left: 0;

    li {
        width: 70%;
        border: 3px solid #000;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        padding: 10px;
        font-weight: bold;
        cursor: pointer;

        &:hover {
            border: 3px double #000;  
        }
    }

    button {
        border: 3px solid #000;
        border-left: none;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        outline: none;
        cursor: pointer;
        font-size: 1rem;
        font-weight: bold;

        &:hover {
            background-color: red;
        }   
    }
`;

const line = {
    textDecoration: 'line-through',
    backgroundColor: 'red'
}

export default function ToDoList(props) {
    return(
        <StylesToDoList>
            <li 
                style={props.complete === true ? line : null }
                onClick={() => props.onTaskComplete(props.id)}
            >{props.name}</li>
            <button onClick={() => props.onDeleteTask(props.id)}>X</button>
        </StylesToDoList>
    )
}