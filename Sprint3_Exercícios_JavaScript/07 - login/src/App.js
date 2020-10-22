import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rodape from './components/footer/index';
import Title from './components/title/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title text="Hello World" description="Primeira vez usando o React!"/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Rodape/>
    </div>
  );
}

export default App;
