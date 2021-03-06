import React from "react";

export default function PackItForm(props) {
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
      <h2>Which trip is this for?</h2>
      <select
        name="trip_id"
        id="trip-select"
        className="form-field"
        value={props.trips.trip_id}
        onChange={props.handleTripsChange}
      >
        <option value="" selected disabled>
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
