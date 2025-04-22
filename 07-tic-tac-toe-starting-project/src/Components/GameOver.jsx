export default function GameOver({winner, onRestart}) {
    return(
        <div id="game-over">
            <h2>Game Over</h2>
            {winner && <p>{winner} Wins!</p>}
            {!winner && <p>Game Is Drow!</p>}
            <p>
                <button onClick={onRestart}>Rematch!</button>
            </p>
        </div>
    )
}