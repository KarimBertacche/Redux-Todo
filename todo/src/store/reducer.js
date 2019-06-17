import { TODO } from './actions';

const defaultState = {
    todos: [],
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case TODO: 
            return {...state, todos: state.todos.concat(action.newTodo)}
        default:
            return state;
    }
}

export default reducer;