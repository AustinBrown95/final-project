import React from 'react'

import './App.css'
import Container from './Container'
import Nav from './Nav'
import Page1 from './Page1'
import Page2 from './Page2'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Nav>

          </Nav>
          <Page1></Page1>
        </Container>
      </header>
    </div>
  );
}

export default App