import { TODO, COMPLETE, DELETE_TODO } from './actions';

const defaultState = {
    todos: [],
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case TODO: 
            return {...state, todos: [action.payload].concat(state.todos)};
        case COMPLETE: 
            const newTodosArr = state.todos.map(todo => {
                if(todo.id === action.id) {
                  todo.complete = true;
                  return todo
                }
                return todo
            });
            return {...state, todos: newTodosArr};
        case DELETE_TODO:
            const newTodosArr2 = state.todos.filter(todo => todo.id !== action.id);
            return {...state, todos: newTodosArr2 }
        default:
            return state;
    }
}

export default reducer;