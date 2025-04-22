import { useState } from "react"

export default function Player({ name, symbol, isActive }) {
    
    const [editedName, setName] = useState(name)
    const [isEditing, setIsEditing] = useState(false)

    function clickHandeling() {
        // setIsEditing(!isEditing) // => true
        // setIsEditing(!isEditing) // => false
        setIsEditing((editing) => !editing)
    }
    function handelName(event) {
        setName(event.target.value)
    }

    let playerName = <span className="player-name">{editedName}</span>
    if (isEditing) {
        playerName = <input
            type="text"
            value={editedName}
            onChange={handelName} // Update the state as the user types
        />
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={clickHandeling}>
                {isEditing ? "Save" : "Edit"}
            </button>
        </li>
    )
}














