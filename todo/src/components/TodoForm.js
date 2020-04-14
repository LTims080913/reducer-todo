import React, { useState, useReducer } from 'react'
import { initialState, reducer } from '../reducers/Reducer'
import {Todo} from './Todo'

function TodoForm() {
    const [newTodo, setNewTodo] = useState("");

    const [state, dispatch] = useReducer(reducer, initialState)
    const handleChanges = e => {
        setNewTodo(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', payload: newTodo })
    }

    const clearTodo = e => {
        e.preventDefault();
        dispatch({type: 'CLEAR'})
    }

    return (
        <div>
            <form>
                <input
                    type='text'
                    placeholder='add todo'
                    name='new todo'
                    value={newTodo}
                    onChange={handleChanges}
                />
                
            </form>
                <button type='submit' onClick={handleSubmit}>Add Todo</button>
                <button type='submit' onClick={clearTodo}>Clear</button>
            <div>
                {state.map(item => 
                    (<Todo 
                    state={item}
                    dispatch={dispatch}
                    id={item.id} />)
                )}


            </div>
        </div>
    )
}

export default TodoForm
