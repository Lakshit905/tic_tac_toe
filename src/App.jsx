import { useState } from 'react';
import './styles.scss'
import {calculateWinner} from './winner'
import Board from './components/Board'

function App() {

  const [squares, setSquare] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(squares);
  const nxtPlayer = isXNext ? 'X' : '0' ;
  const statusmsg = winner ? `Winner is ${winner}` : `Next Player is ${nxtPlayer}`;

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
        <h2>{statusmsg}</h2>
       <Board squares={squares} handleSquareClick={handleSquareClick}/>
      </div>
  )
}

export default App
