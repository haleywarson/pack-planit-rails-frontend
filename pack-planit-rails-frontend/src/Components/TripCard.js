import React from "react";

import "../App.css";
import SimpleModal from "./SimpleModal";

export default function TripCard(props) {
  //   const displayList = () => {
  //     props.lists.map((list) => list.items);
  //   };

  return (
    <div className="trip-card">
      <img alt="Trip" src={props.image}></img>
      <p id="trip-title">{props.name}</p>
      <br />
      <p>{props.location}</p>
      <p>
        {props.start_date} to {props.end_date}
      </p>
      <br />
      <p>Category: {props.category}</p>
      <p>Miles: {props.miles} </p>
      <p>Difficulty: {props.difficulty}</p>
      <p>Rating: {props.rating}</p>
      <p>
        <span>Notes:</span> {props.notes}
      </p>
      <SimpleModal />
      {/* <button onClick={displayList()}>View packing list</button> */}
    </div>
  );
}
