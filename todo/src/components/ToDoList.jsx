import React from 'react';
import styled from 'styled-components';

const StylesToDoList = styled.div`


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
        </StylesToDoList>
    )
}