import React from 'react';
import styled from 'styled-components';
import uuid from 'uuid';

import { NavLink } from 'react-router-dom';

const StylesNavBar = styled.header`
    position: fixed;
    width: 20%;
    height: 100vh;
    border-right: 3px solid #000;

    h2 {
        background-color: #000;
        text-align: center;
        border-bottom: 3px solid #000;
        padding: 20px 0;
        margin-top: 0;
        color: #fff;
    }

    li {
        list-style: none;
        background-color: #000;
        color: #fff;
        text-align: center;
        padding: 10px;
        margin-bottom: 10px;
        font-weight: bold;
        font-weight: bold;
        border: 3px solid #000;
        cursor: pointer;

        &:hover {
            background-color: #fff;
            color: #000;
        }
    }

`;

export default function NavBar(props) {
    return (
        <StylesNavBar>
            <nav>
                <h2>TODO or NOT TODO</h2>
                {
                    props.todoList.map(todoList => {
                        return <li key={uuid()}>{props.listName}</li>
                    })
                }
            </nav>
        </StylesNavBar>
    )
} 