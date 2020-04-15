import React, { useState, useReducer } from 'react'
import { initialState, reducer } from '../reducers/Reducer'
import {Todo} from './Todo'
import styled from 'styled-components'

const StyledList = styled.div `
margin: -2% 45% -7%;
`
const StyledButton = styled.button `
margin: 0% auto;
letter-spacing: 2px;
border-radius: 15px;
background-color: goldenrod;
height: 4vh;
width: 60%;
font-weight: 800%;
color: floralwhite;
text-shadow: 1px 1px gray;
margin-bottom: 2%
`
const StyledForm = styled.form `

`
const StyledInput = styled.input `
width: 300%;
margin-bottom: 10%;
margin-left: -127%;
margin-top: -7%;
height: 6vh;
border-radius: 10px;
letter-spacing: 2px;
padding: 0% 0% 0% 10%;
`

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
        <StyledList>
            <form>
                <StyledInput
                    type='text'
                    placeholder='Add A To-Do'
                    name='new todo'
                    value={newTodo}
                    onChange={handleChanges}
                />
                
            </form>
                <StyledButton type='submit' onClick={handleSubmit}>Add Todo</StyledButton>
                <StyledButton type='submit' onClick={clearTodo}>Clear</StyledButton>
            <div>
                {state.map(item => 
                    (<Todo 
                    state={item}
                    dispatch={dispatch}
                    id={item.id} />)
                )}


            </div>
        </StyledList>
    )
}

export default TodoForm
