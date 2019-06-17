import React from 'react';
import './App.css';

import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <AddToDo />
      <ToDoList />
    </div>
  );
}

export default App;
