import { useState } from "react"
export default function  Player({initialName,symbol,isActive,onPlayerChange})
{
    const [Player,setPlayer] = useState(initialName);
    const [isEditing,setIsEditing]=useState(false);
    function HandleClick()
    {
        setIsEditing((editing)=>!editing);
        if(isEditing)
        {
            onPlayerChange(symbol,Player)
        }
    }
    function HandlePlayer(event)
    {
        setPlayer(event.target.value);
    }
    let playerName=<span className="player-name">{Player}</span>;
    if(isEditing)
    {
        playerName= <input type="text" required value={Player} onChange={HandlePlayer} />
    }
    return(
        <li className={isActive? 'active' : undefined}>
            <span className="player">
             {playerName}
             <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={HandleClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}