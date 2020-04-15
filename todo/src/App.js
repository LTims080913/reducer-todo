import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import Background from './images/white-book-page-on-yellow-surface-1296726.jpg'
import styled from 'styled-components'

const ImageBackground = styled.div `
display: flex;
flex-direction: column-reverse;
justify-content: center;
background-image: url(${Background});
background-size: cover;
height: 100vh;
`
const Title = styled.h1 `
padding: 1%;
margin: -20% 9% 2% 73%;
width: 17%;
color: slategray;
font-size: 3.5rem;
text-shadow: 2px 2px black;
text-align: center;

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
