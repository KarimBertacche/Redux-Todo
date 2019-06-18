import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const StylesNavBar = styled.header`
    position: fixed;
    width: 20%;
    height: 100vh;
    border-right: 3px solid red;

    h2 {
        background-color: red;
        text-align: center;
        border-bottom: 3px solid red;
        padding: 20px 0;
        margin-top: 0;
    }

`;

export default function NavBar(props) {
    return (
        <StylesNavBar>
            <nav>
                <h2>TODO or NOT TODO</h2>
                {
                    props.todoList.map(todoList => {
                        return <li>{todoList.name}</li>
                    })
                }
            </nav>
        </StylesNavBar>
    )
} 