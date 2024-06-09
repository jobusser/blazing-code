import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


let name = "JoJo";

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <header className='App-header'>
        <h1> Welcome to my app, {name}. </h1>
        <MyButton count={count} onClick={handleClick} />
        <MyButton count={count} onClick={handleClick} />
      </header>
    </div >
  );
}

export default App;
