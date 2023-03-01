import './App.css';
import {useState} from 'react';

function App() {

  const [result, setResult] = useState('');

  const handleClick = () =>{

  }

  return (
    <div className="container">
      <form>
        <input className="current-operand" type={"text"} value={result}/>
      </form>
      <div clasName="buttons">
        <button clasName="ac span-two" onClick={handleClick}>AC</button>
        <button onClick={handleClick}>Del</button>
        <button onClick={handleClick}>&divide;</button>
        <button onClick={handleClick}>7</button>
        <button onClick={handleClick}>8</button>
        <button onClick={handleClick}>9</button>
        <button onClick={handleClick}>&times;</button>
        <button onClick={handleClick}>4</button>
        <button onClick={handleClick}>5</button>
        <button onClick={handleClick}>6</button>
        <button onClick={handleClick}>-</button>
        <button onClick={handleClick}>1</button>
        <button onClick={handleClick}>2</button>
        <button onClick={handleClick}>3</button>
        <button onClick={handleClick}>+</button>
        <button onClick={handleClick}>0</button>
        <button onClick={handleClick}>.</button>
        <button clasName="span-two" onClick={handleClick}>=</button>
      </div>
    </div>
  );
}

export default App;
