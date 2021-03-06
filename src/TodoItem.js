import React from 'react'

function TodoItem(props) {
    const completedStyle = {
        textDecoration : "line-through",
        fontStyle : "italic",
        color: "grey"
    }
    return (
        <div>
            <input 
            type="checkbox" 
            checked={props.item.completed} 
            onChange={() => props.handleChange(props.item.id)}
            />
            <p style={props.item.completed ? completedStyle : null}>{props.item.text}</p>
        </div>
    )
}

export default TodoItem;
