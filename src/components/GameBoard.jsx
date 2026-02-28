import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({handlePlayer, activePlayerSymbol}) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    });

    handlePlayer()
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((activePlayerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                  {activePlayerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
