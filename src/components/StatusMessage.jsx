
const StatusMessage = ({isXNext,winner,squares})=> {

  const nxtPlayer = isXNext ? 'X' : '0' ;
  const noMovesLeft = squares.every(squareValue => squareValue != null) ;
  
  const renderStatusMessage = () => {

    if(winner){
        return <>Winner is <span className={winner === 'X' ? "text-green" : "text-orange"}>{winner}</span></>
    }
    if(!winner && noMovesLeft){
        return  <>
                   <span className="text-orange">0</span> and {' '} <span className="text-green">X</span> tied
                </>
    }
    if(!winner && !noMovesLeft){
        return <> Next Player is <span className={nxtPlayer ? "text-green" : "text-orange"}>{nxtPlayer}</span></>
    }
    return null;
  };

    return(
        <div className="status-message"> {renderStatusMessage()}</div>
    ) 
}

export default StatusMessage;