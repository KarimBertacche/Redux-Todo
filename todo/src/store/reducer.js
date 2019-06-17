import { TODO, COMPLETE } from './actions';

const defaultState = {
    todos: [],
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case TODO: 
            return {...state, todos: state.todos.concat(action.payload)};
        case COMPLETE: 
            const newTodosArr = state.todos.map(todo => {
                if(todo.id === action.id) {
                  todo.complete = true;
                  return todo
                }
                return todo
            });
            return {...state, todos: newTodosArr};
        default:
            return state;
    }
}

export default reducer;