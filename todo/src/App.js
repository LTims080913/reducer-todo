import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import Background from './images/white-book-page-on-yellow-surface-1296726.jpg'
import styled from 'styled-components'

const ImageBackground = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
background-image: url(${Background});
background-size: cover;
height: 100vh;
`
const Title = styled.h1 `
padding: 2%;
margin: -15% 35% 5% 35%;
color: slategray;
font-size: 2.5rem;

`

function App() {
  return (
    <ImageBackground>
      <Title>Keep Calm And...<br/> To-Do List</Title>
      <TodoForm/>
      {/* <Todo/> */}
    </ImageBackground>
  );
}

export default App;
