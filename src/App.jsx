import { useState } from 'react';
import './styles.scss'
import {calculateWinner} from './winner'
import Board from './components/Board'
import StatusMessage from './components/StatusMessage';

function App() {

  const [squares, setSquare] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(squares);
  
  const handleSquareClick = clickedPosition => {
    if (squares[clickedPosition] || winner) {
      return;
    }

    setSquare(currentSquare => {
      return currentSquare.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isXNext ? 'X' : '0';
        }

        return squareValue;
      });
    });

    setIsXNext(currentIsXNext => !currentIsXNext);
  };
  
  return (
    
      <div className='app'>
      <StatusMessage isXNext={isXNext} winner={winner} squares={squares}/>
       <Board squares={squares} handleSquareClick={handleSquareClick}/>
      </div>
  )
}

export default App
