import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { addListTodo } from '../store/actions/actionsCreator';

const StylesTodoCreator = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid #000;
    width: 300px;
    height: 180px;
    margin-top: 15px;
    border-radius: 5px;
    box-shadow: .5px .5px 10px #000;
    font-size: 7rem;
    font-weight: normal;
    cursor: pointer;

    &:hover {
        color: red;
    }
`;

function TodoCreator(props) {
    return (
        <StylesTodoCreator onClick={props.onAddListTodo}>
            <p>+</p>
        </StylesTodoCreator>
    )
}

const mapStateToProps = state => {
    return {
        todoList: state.todoList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddListTodo: () => dispatch(addListTodo()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoCreator);