import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import NavBar from './components/NavBar';
import TodoContainer from './components/TodoContainer';
import TodoCreator from './components/TodoCreator';

const StylesApp = styled.div`
  display: flex;

  main {
    width: 80%;
    max-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    padding: 30px;
    padding-left: 25%;
    overflow: scroll;
  }
`;

class App extends React.Component {
  state = {
    input: '',
    nameTodo: '',
    todoList: [],
  }

  componentDidMount() {
    this.setState(prevState=> ({ todoList: prevState.todoList.concat(this.props.todos)}));
  }

  inputHandler = event => {
    // this.state.todoList.map((list, index) => {
    //   if(list[index] === )
    // })
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

  createNewListHandler = (newTodo) => {
    this.setState(prevState => ({ todoList: prevState.todoList.concat(newTodo) }));
  }

  render() {
    return (
      <StylesApp>
        <NavBar 
          todoList={this.state.todoList}
        />
        <main>
          
            {
              this.state.todoList.map(list => {
                return (
                  <section>
                    <TodoContainer 
                      nameTodo={this.state.nameTodo}
                      nameTodoHandler={this.nameTodoHandler}
                      input={this.state.input}
                      inputHandler={this.inputHandler}
                      addNewTodoHandler={this.addNewTodoHandler}
                    />
                  </section>
                );
              })
            }
            
          
          <TodoCreator 
            createNewList={this.createNewListHandler}
          />
        </main>
      </StylesApp>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
  }
}

export default connect(mapStateToProps)(App);
