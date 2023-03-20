import React from 'react'
import logo from './logo.svg'
import './App.css'
import Button from './components/atoms/Button/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h2 className="text-3xl font-sans font-bold underline">
          Hello World!!
        </h2>
        <Button variant="green-fill">Button</Button>
      </header>
    </div>
  )
}

export default App
