import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Allgun from './Components/Allgun/Allgun';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const inCreaseCount = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <Header count={count}></Header>
      <Allgun inCreaseCount={inCreaseCount}></Allgun>

    </div>
  );
}

export default App;
