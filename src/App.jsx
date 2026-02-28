import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectedPlayer(){
    // console.log(activePlayer)
    setActivePlayer(curActivePlayer => (curActivePlayer === 'X' ? 'O' : 'X'))
    
  }

  return (
    <>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            activePlayer={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            activePlayer={activePlayer === "O"}
          />
        </ol>
        <GameBoard handlePlayer={handleSelectedPlayer} activePlayerSymbol={activePlayer}/>
      </div>
      LOGS
    </>
  );
}

export default App;
