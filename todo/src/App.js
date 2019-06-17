import React from 'react';
import { connect } from 'react-redux';
import { TODO, COMPLETE } from './store/actions';

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

  addNewTodo = () => {
    this.props.onAddTodo(this.state.input);
    this.setState({ input: '' });
  } 


  render() {
    return (
      <div className="App">
        <AddToDo
          value={this.state.input}
          inputHandler={this.inputHandler}
          addNewTodo={this.addNewTodo}
        />
        {
          this.props.todos.map(todo => {
            return <ToDoList 
                    key={uuid()} 
                    name={todo.todo}
                    id={todo.id}
                    complete={todo.complete}
                    onTaskComplete={this.props.onTaskComplete}/>
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
    onAddTodo: (value) => dispatch({ type: TODO, payload: { todo: value, complete: false, id: uuid() }}),
    onTaskComplete: (id) => dispatch({ type: COMPLETE, id: id })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
