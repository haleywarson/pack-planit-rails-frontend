import React from "react";

export default function PackItForm(props) {
  console.log(props.trips);
  return (
    <form className="pack-it-form" onSubmit={props.handleSubmit}>
      <label htmlFor="listName">Packing list name</label>
      <input
        className="form-field"
        type="text"
        name="listName"
        value={props.listName}
        onChange={props.handleListNameChange}
      />
      <h2>Assign trip to your list</h2>
      <select
        name="trip_id"
        value={props.trips.trip_id}
        onChange={props.handleTripsChange}
      >
        <option className="trip-select" value="" selected disabled>
          Select trip
        </option>
        {props.trips.map((t) => (
          <option key={t.id} value={t.id}>
            {t.name}
          </option>
        ))}
      </select>
      <label htmlFor="item">Item</label>
      <input className="form-field" type="text" name="item" />

      <input type="submit" value="Add item" />
    </form>
  );
}
