import uuid from 'uuid';
import * as types from './actions';

export const addTodo = (value) => {
    return {
        type: types.TODO,
        payload: {
            todo: value,
            complete: false,
            id: uuid()
        }
    }
};

export const taskCompleted = (id) => {
    return {
        type: types.COMPLETE, 
        id: id, 
    }
}

export const deleteTask = (id) => {
    return {
        type: types.DELETE_TODO, 
        id: id
    }
}

export const addListTodo = () => {
    return {
        type: types.ADD_LIST,
        id: uuid()
    }
}