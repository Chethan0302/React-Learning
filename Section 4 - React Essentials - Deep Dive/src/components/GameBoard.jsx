export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rIndex) => (
        <li key={rIndex}>
          <ol>
            {row.map((playerSymbol, cIndex) => (
              <li key={cIndex}>
                <button
                  onClick={() => onSelectSquare(rIndex, cIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
