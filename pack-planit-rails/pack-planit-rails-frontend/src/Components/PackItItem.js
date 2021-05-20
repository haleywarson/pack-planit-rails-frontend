import React from 'react'

export default function PackItItem(props) {

    return (
        <li className="pack-it-item">
            <p>
            <button
                id="check-button"
                onClick={() => props.removeItem(props.item)}
            >
                ✓
            </button>
            <button
                id="delete-button"
                onClick={() => props.removeItem(props.item)}
            >
                X
            </button>
            {props.item}
            </p>
        </li>
    );
}
