import React from 'react';
import styled from 'styled-components';
// import { Route } from 'react-router-dom';
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
  }

  inputHandler = (event, id)=> {
    this.props.todoList.map((list) => {
      if(list.id === id){
        this.setState({ input: event.target.value })
      }
    })
  }

  addNewTodoHandler = (onAddTodo, id) => {
    this.props.todoList.map(list => {
      if(this.state.input !== '' && list.id === id) {
        onAddTodo(this.state.input.toUpperCase(), id);
        this.setState({ input: '' });
      }
      return null;
    })
  } 

  nameTodoHandler = (event, id) => {
    this.props.todoList.map(list => {
      if(list.id === id) {
        return this.setState({ nameTodo: event.target.value.toUpperCase() })
      }
      return null;
    }) 
  }

  render() {
    return (
      <StylesApp>
        <NavBar 
          todoList={this.props.todoList}
        />
        <main>
          
            {
              this.props.todoList.map(list => {
                return (
                  <section>
                    <TodoContainer 
                      listID={list.id}
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
    todoList: state.todoList,
  }
}

export default connect(mapStateToProps)(App);