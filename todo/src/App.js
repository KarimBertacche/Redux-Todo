import React from 'react';
import { connect } from 'react-redux';
import { TODO, COMPLETE, DELETE_TODO } from './store/actions';

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

  section {
    max-height: 70vh;
    overflow: scroll;
    border-top: 3px solid #000;
  
    &::-webkit-scrollbar {
      height: 0;
      width: 0;
    }
  }
`;

class App extends React.Component {
  state = {
    input: '',
  }

  inputHandler = event => {
    this.setState({ input: event.target.value })
  }

  addNewTodo = () => {
    if( this.state.input !== '') {
      this.props.onAddTodo(this.state.input.toUpperCase());
      this.setState({ input: '' });
    }
  } 

  render() {
    return (
      <StylesApp >
        <h2>TODO LIST </h2>
        <AddToDo
          value={this.state.input}
          inputHandler={this.inputHandler}
          addNewTodo={this.addNewTodo}
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
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: (value) => dispatch({ type: TODO, payload: { todo: value, complete: false, id: uuid() }}),
    onTaskComplete: (id) => dispatch({ type: COMPLETE, id: id }),
    onDeleteTask: (id) => dispatch({ type: DELETE_TODO, id: id })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
