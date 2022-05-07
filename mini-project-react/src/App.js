import React from 'react'
// import logo from './logo.svg';
import './App.css';
import Headerrfc from './components/Headerrfc';
import TodoContainerrfc from './components/TodoContainerrfc';


function App() {
  return (
    <div className="App">
      <Headerrfc />
      <TodoContainerrfc />
    </div>
  );
}

export default App;
