
const StatusMessage = ({ gamingBoard ,winner})=> {

  const {isXNext,squares} = gamingBoard;
  
  const nxtPlayer = isXNext ? 'X' : '0' ;
  const noMovesLeft = squares.every(squareValue => squareValue != null) ;
  
  const renderStatusMessage = () => {

    if(winner){
        return <> <span>Winner is</span> <span  className={winner === 'X' ? "text-green" : "text-orange"}>{winner}</span></>
    }
    if(!winner && noMovesLeft){
        return  <>
                   <span className="text-orange">0</span> and {' '} <span className="text-green">X</span> tied
                </>
    }
    if(!winner && !noMovesLeft){
        return <> Next Player is { ''} <span className={nxtPlayer === 'X' ? 'text-green' : 'text-orange'}>{nxtPlayer}</span> </>
    }
    return null;
  };

    return(
        <div className="status-message"> {renderStatusMessage()}</div>
    ) 
}

export default StatusMessage;