import { useState } from "react"
import Player from "./Components/Player"
import Gamebord from "./Components/GameBord"
import Log from "./Components/Log"
import { WINNING_COMBINATIONS } from "./Components/Winning_Compinations"
import GameOver from "./Components/GameOver"

const initialGameBord = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]


function GetCurrentPlayer(turn) {
  let currentPlayer = 'X'
  if (turn.length > 0 && turn[0].player === 'X') {
    currentPlayer = 'O'
  }
  return currentPlayer
}

function App() {
  const [playeres, setPlayers] = useState({
    X: "Player 1",
    O: "player 2"  
  })
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState('X')
  const activePlayer = GetCurrentPlayer(gameTurns)

  let gameBoard = [...initialGameBord.map(array => [...array])]
  let winner

  for (const turn of gameTurns) {
    const { square, player } = turn
    const { row, col } = square
    gameBoard[row][col] = player
  }

  for (const compination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[compination[0].row][compination[0].column]
    const secondSquareSymbol = gameBoard[compination[1].row][compination[1].column]
    const thirdSquareSymbol = gameBoard[compination[2].row][compination[2].column]

    if (firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol) {

      winner = firstSquareSymbol
      // setWinner(firstSquareSymbol);
    }
  }

  const hasDrow = gameTurns.length === 9 && !winner

  function activePlayerHandeling(rowIndex, colIndex) {
    // setActivePlayer((currenActivePlayer) => currenActivePlayer === "X" ? 'O' : 'X')

    setGameTurns((prevTurns) => {
      const currentPlayer = GetCurrentPlayer(prevTurns)

      const updateTurns = [{
        square: { row: rowIndex, col: colIndex },
        player: currentPlayer
      }, ...prevTurns]
      return updateTurns
    })
  }

  function handelRestart() {
    setGameTurns([]);
    // setWinner('')
  }

  function handlePlayerNameChange(symbol, newName){
    setPlayers(prevPlayers => {
      return{
        ...prevPlayers,
        [symbol]: newName
      }
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Omar" symbol={'X'} isActive={activePlayer === 'X'} />
          <Player name="Animi" symbol={'O'} isActive={activePlayer === 'O'} />
        </ol>

        {(winner || hasDrow) && <GameOver winner={winner} onRestart={handelRestart} />}
        <Gamebord
          onSelectedSquare={activePlayerHandeling}
          board={gameBoard}
        />
      </div>

      <Log turns={gameTurns} />
    </main>
  )
}

export default App
