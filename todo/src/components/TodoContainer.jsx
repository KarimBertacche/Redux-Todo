import React from 'react';
import uuid from 'uuid';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { addTodo, taskCompleted, deleteTask } from '../store/actions/actionsCreator';

import AddToDo from './AddToDo';
import ToDoList from './ToDoList';

const StylesContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  border: 3px solid #000;
  border-radius: 5px;
  text-align: center;
  margin-top: 5%;
  box-shadow: .5px .5px 10px #000;
  overflow: hidden;
    
  .title-input {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    outline: none;
    border: none;
  }

  section {
    max-height: 70vh;
    overflow: scroll;
    border-top: 3px solid #000;
  
    &::-webkit-scrollbar {
      height: 0;
      width: 0;
    }
  }

  p {
    font-weight: bold;

    span {
      font-size: 1.1rem;
    }
  }
`;

function TodoContainer(props) {
    return (
        <StylesContainer>
          <input 
            className='title-input'
            type='text'
            value={props.nameTodo}
            onChange={props.nameTodoHandler}
            placeholder='Add list name here'
          />
          <p>Number of Todos: <span>{props.numOfTodos}</span></p>
          <p>Todos completed: <span>{props.completedTodos}</span></p>
          <AddToDo
            value={props.input}
            inputHandler={props.inputHandler}
            addNewTodo={props.addNewTodoHandler}
          />
          <section>

          {
            props.todos.map(todo => {
              return <ToDoList 
                      key={uuid()} 
                      name={todo.todo}
                      id={todo.id}
                      complete={todo.complete}
                      onTaskComplete={props.onTaskComplete}
                      onDeleteTask={props.onDeleteTask}/>
            }) 
          }
          </section>
      </StylesContainer>
    );
}

const mapStateToProps = (state) => {
    return {
      todos: state.todos,
      numOfTodos: state.todos.length,
      completedTodos: state.todos.filter(todo => todo.complete).length
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
        onAddTodo: (value) => dispatch(addTodo(value)),
        onTaskComplete: (id) => dispatch(taskCompleted(id)),
        onDeleteTask: (id) => dispatch(deleteTask(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);