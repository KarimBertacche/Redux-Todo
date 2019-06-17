import React from 'react';
import { connect } from 'react-redux';
import { TODO } from './store/actions';

import uuid from 'uuid';

import './App.css';

import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';

class App extends React.Component {
  state = {
      input: '',
  }

  inputHandler = event => {
      this.setState({ input: event.target.value })
  }



  render() {
    return (
      <div className="App">
        <AddToDo
          value={this.state.input}
          inputHandler={this.inputHandler}
          onAddTodo={this.props.onAddTodo}
        />
        {
          this.props.todos.map(todo => {
            return <ToDoList key={todo.id} name={todo.todo}/>
          }) 
        }
      </div>
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
    onAddTodo: (value) => dispatch({ type: TODO, newTodo: { todo: value, complete: false, id: uuid() }})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
