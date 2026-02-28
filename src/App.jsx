function App() {
  return (
    <>
      <div id="game-container">
        <ol id="players">
          <li>
            <span className="player">
              <span className="player-name">Player 1</span>
              <span className="player-symbo">X</span>
            </span>
            <button>Edit</button>
          </li>
          <li>
            <span className="player">
              <span className="player-name">Player 2</span>
              <span className="player-symbo">O</span>
            </span>
            <button>Edit</button>
          </li>
        </ol>
        GAME BOARD
      </div>
      LOGS
    </>
  );
}

export default App;
