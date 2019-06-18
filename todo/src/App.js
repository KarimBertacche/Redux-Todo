import React from 'react';
import { connect } from 'react-redux';
import { addTodo, taskCompleted, deleteTask } from './store/actions/actionsCreator';

import styled from 'styled-components';
import uuid from 'uuid';

import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';

const StylesApp = styled.div`
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

class App extends React.Component {
  state = {
    input: '',
    nameTodo: '',
  }

  inputHandler = event => {
    this.setState({ input: event.target.value })
  }

  addNewTodoHandler = () => {
    if( this.state.input !== '') {
      this.props.onAddTodo(this.state.input.toUpperCase());
      this.setState({ input: '' });
    }
  } 

  nameTodoHandler = (event) => {
    this.setState({ nameTodo: event.target.value.toUpperCase() })
  }

  render() {
    return (
      <StylesApp >
        <input 
          className='title-input'
          type='text'
          value={this.state.nameTodo}
          onChange={this.nameTodoHandler}
          placeholder='Add list name here'
        />
        <p>Number of Todos: <span>{this.props.numOfTodos}</span></p>
        <p>Todos completed: <span>{this.props.completedTodos}</span></p>
        <AddToDo
          value={this.state.input}
          inputHandler={this.inputHandler}
          addNewTodo={this.addNewTodoHandler}
        />
        <section>

        {
          this.props.todos.map(todo => {
            return <ToDoList 
                    key={uuid()} 
                    name={todo.todo}
                    id={todo.id}
                    complete={todo.complete}
                    onTaskComplete={this.props.onTaskComplete}
                    onDeleteTask={this.props.onDeleteTask}/>
          }) 
        }
        </section>
      </StylesApp>
    );
  }
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


export default connect(mapStateToProps, mapDispatchToProps)(App);
