import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import TodoContainer from './components/TodoContainer';

const StylesApp = styled.div`
  display: flex;
`;

export default class App extends React.Component {
  state = {
    input: '',
    nameTodo: '',
  }

  inputHandler = event => {
    this.setState({ input: event.target.value })
  }

  addNewTodoHandler = (onAddTodo) => {
    if( this.state.input !== '') {
      onAddTodo(this.state.input.toUpperCase());
      this.setState({ input: '' });
    }
  } 

  nameTodoHandler = (event) => {
    this.setState({ nameTodo: event.target.value.toUpperCase() })
  }

  render() {
    return (
      <StylesApp>
        <NavBar />
        <main>
          <TodoContainer 
            nameTodo={this.state.nameTodo}
            nameTodoHandler={this.nameTodoHandler}
            input={this.state.input}
            inputHandler={this.inputHandler}
            addNewTodoHandler={this.addNewTodoHandler}
          />
        </main>
      </StylesApp>
    );
  }
}
