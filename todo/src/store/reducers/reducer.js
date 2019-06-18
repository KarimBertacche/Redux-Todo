import { TODO, COMPLETE, DELETE_TODO, ADD_LIST } from '../actions/actions';

const defaultState = {
    todos: [],
    todoList: [],
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case TODO: 
            let newtodoList = state.todoList.map(list => {
                if(list.id === action.listID){
                    return {...list, todos: [action.payload].concat(state.todos)};
                }
                return list
            }) 
            return {...state, todos: [action.payload].concat(state.todos), todoList: newtodoList}
        case COMPLETE: 
            const newTodosArr = state.todos.map(todo => {
                if(todo.id === action.id) {
                  return {...todo, complete: true};
                }
                return todo;
            });
            return {...state, todos: newTodosArr};
        case DELETE_TODO:
            const newTodosArr2 = state.todos.filter(todo => todo.id !== action.id);
            return {...state, todos: newTodosArr2 }
        case ADD_LIST:
            return {...state, todoList: state.todoList.concat({todos: {...state.todos}, id: action.id})}
        default:
            return state;
    }
}

export default reducer;