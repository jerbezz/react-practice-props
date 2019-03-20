import React from 'react';
import './userInput.css';

export default function (props) {
    return (
        <div className="user-input--component">
            <input value={props.name} type="text" placeholder="name" name="name" onChange={props.handleInput}></input>
            <input value={props.image} type="text" placeholder="image_url" name="image" onChange={props.handleInput}></input>
            <button onClick={props.handleClick}>submit</button>
        </div>
    )
}