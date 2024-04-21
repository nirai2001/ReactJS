
export default function Gameboard({onSelectSquare,board})
{
    // const [Game,setGame]=useState(initialGameBoard)
    // function handleSelect(rowIdx,colIdx)
    // {
    //     setGame((prevGame)=>{
    //         const updtGame=[...prevGame.map(innerArray => [...innerArray])];
    //         updtGame[rowIdx][colIdx]= activeSymbol;
    //         return updtGame;
    //     });
    //     onSelectSquare();
    // }
    // let Game= initialGameBoard;

    // for(const turn of turns)
    // {
    //     const{square,player}=turn;
    //     const{row,col}=square;
    //     Game[row][col]=player;

    // }
    return(
        <ol id="game-board">
            {board.map((row,rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol,colIndex)=>(
                            <li key={colIndex}>
                                <button onClick={()=>onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>

                </li>

            ))}

        </ol>
    )
}