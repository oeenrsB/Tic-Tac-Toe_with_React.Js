export default function Gamebord({ onSelectedSquare, board }) {
    

    // const [gameBoard, setGameBoard] = useState(initialGameBord)
    // function boardHandeling(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const instancGameBoard = [...prevGameBoard].map(innerArr => [...innerArr])
    //         instancGameBoard[rowIndex][colIndex] = activePlayer
    //         return instancGameBoard
    //     })

    //     onSelectedSquare()
    // }

    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {
                            row.map((symbol, colIndex) => (
                                <li key={colIndex}>
                                    <button onClick={() => onSelectedSquare(rowIndex, colIndex)} disabled={symbol !== null}>
                                        {symbol}
                                    </button>
                                </li>
                            ))
                        }
                    </ol>
                </li>
            ))}
        </ol>
    )
}