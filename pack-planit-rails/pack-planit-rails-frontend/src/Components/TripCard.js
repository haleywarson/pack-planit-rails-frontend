import React from 'react'

import "../App.css";

export default function TripCard(props) {
    return (
        <div className="trip-card">
            <img alt="Trip" src={props.image}></img>
            <p id="trip-title">{props.name}</p>
            <br/>
            <p>{props.location}</p>
            <p>
            {props.start_date} to {props.end_date}
            </p>
            <br/>
            <p>Category: {props.category}</p>
            <p>Miles: {props.miles} </p>
            <p>Difficulty: {props.difficulty}</p>
            <p>Rating: {props.rating}</p>
            <p>
            <span>Notes:</span> {props.notes}
            </p>
        </div>
    );
}