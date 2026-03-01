import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";

function derivedCurrentPlayer(gameTurns){
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState("X");

  let activePlayer = derivedCurrentPlayer(gameTurns);

  function handleSelectedPlayer(rowIndex, colIndex) {
    
    // setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let currentPlayer = derivedCurrentPlayer(prevTurns);

      let updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
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
        <GameBoard
          onSelectSquare={handleSelectedPlayer}
          turns= {gameTurns}
        />
      </div>
      <Log turns={gameTurns} />
    </>
  );
}

export default App;
