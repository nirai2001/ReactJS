import Gameboard from "./Gameboard"
import Log from "./Log";
import Player from "./Player"
import { useState } from "react"
import { WINNING_COMBINATIONS } from "./winning-combinations"
import GameOver from "./GameOver";

const PLAYERS ={
  X: 'player-1',
  O: 'player-2'
}
const INITIAL_GAME_BOARD = [
  [null,null,null],
  [null,null,null],
  [null,null,null],
];

function deriveActivePlayer(gameTurns)
{
  let currentPlayer = 'X';
  if(gameTurns.length>0 && gameTurns[0].player==='X')
  {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function deriveWinner(Game,players)
{
  let winner;
  for (const combination of WINNING_COMBINATIONS)
  {
    const firstSquareSymbol = Game[combination[0].row][combination[0].column]
    const secondSquareSymbol = Game[combination[1].row][combination[1].column]
    const thirdSquareSymbol = Game[combination[2].row][combination[2].column]
    if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol)
    {
      winner = players[firstSquareSymbol]
    }
  }
  return winner;
}

function deriveGameBoard(gameTurns)
{
  let Game=[...INITIAL_GAME_BOARD.map(array=>[...array])]
  for(const turn of gameTurns)
  {
      const{square,player}=turn
      const{row,col}=square
      Game[row][col]=player

  }
  return Game;
}
function App() {

  const [players,setPlayers] = useState(PLAYERS)
  const [gameTurns,setGameTurns] = useState([]) 
  // const [activePlayer, setActivePlayer] = useState('X');
  const activePlayer = deriveActivePlayer(gameTurns) 
  const Game = deriveGameBoard(gameTurns)
  const winner = deriveWinner(Game,players)
  const isDraw = gameTurns.length === 9 && !winner
  function handleSelectSquare(rowIndex,colIndex)
  {
    // setActivePlayer((curActivePlayer) => curActivePlayer==='X' ? 'O' : 'X'  );
    setGameTurns(prevTurns=>{
      let currentPlayer = deriveActivePlayer(prevTurns)
      const updatedTurns=[{square:{row:rowIndex,col:colIndex}, player:currentPlayer},...prevTurns]
      return updatedTurns
    })
    
  }

  function handleNameChange(symbol,newName)
  {
    setPlayers((prevPlayer)=>{
      return{
        ...prevPlayer,
        [symbol]: newName
      }
    })
  }

  function handleRestart()
  {
    setGameTurns([]);
  }
  return(
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={PLAYERS.X} 
          symbol="X" 
          isActive={activePlayer === 'X'}
          onPlayerChange={handleNameChange} />
          <Player initialName={PLAYERS.O} 
          symbol="O" 
          isActive={activePlayer === 'O'}
          onPlayerChange={handleNameChange}/>
        </ol>       
        {(winner || isDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
        <Gameboard onSelectSquare={handleSelectSquare} board={Game}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
