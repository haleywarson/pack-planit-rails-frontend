import React from "react";

import "../App.css";
import SimpleModal from "./SimpleModal";

export default function TripCard(props) {
  return (
    <div className="trip-card">
      <img alt="Trip" src={props.image}></img>
      <p id="trip-title">{props.name}</p>
      <br />
      <p>{props.location}</p>
      <p>
        {props.start_date} to {props.end_date}
      </p>
      <SimpleModal
        category={props.category}
        miles={props.miles}
        difficulty={props.difficulty}
        rating={props.rating}
        notes={props.notes}
        lists={props.lists}
        name={props.name}
      />
    </div>
  );
}
