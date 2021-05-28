import React, { useState } from "react";

import "../App.css";

const tripsUrl = "http://localhost:3000/trips/";

export default function Plan() {
  const [values, setValues] = useState({
    name: "",
    location: "",
    image: "",
    start_date: "",
    end_date: "",
    category: "",
    miles: 0,
    difficulty: "",
    rating: 0,
    notes: "",
  });

  const handleInputChange = (event) => {
    event.persist();
    const name = event.target.name;
    const value = event.target.value;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitting...");
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    };
    fetch(tripsUrl, options)
      .then((res) => res.json())
      .then(() => {
        setValues({
          name: "",
          location: "",
          image: "",
          start_date: "",
          end_date: "",
          category: "",
          miles: 0,
          difficulty: "",
          rating: 0,
          notes: "",
        });
      });
  };

  return (
    <div className="log-it-container">
      <form className="log-it-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Trip name</label>
        <input
          id="name"
          className="form-field"
          type="text"
          placeholder=""
          name="name"
          value={values.name || ""}
          onChange={handleInputChange}
        />

        <label htmlFor="location">Trip location</label>
        <input
          id="location"
          className="form-field"
          type="text"
          placeholder=""
          name="location"
          value={values.location || ""}
          onChange={handleInputChange}
        />

        <label htmlFor="image">Trip image</label>
        <input
          id="image"
          className="form-field"
          type="text"
          placeholder=""
          name="image"
          value={values.image || ""}
          onChange={handleInputChange}
        />

        <label htmlFor="start_date">Start date</label>
        <input
          id="start_date"
          className="form-field"
          type="date"
          placeholder="Start date"
          name="start_date"
          value={values.start_date || ""}
          onChange={handleInputChange}
        />

        <label htmlFor="end_date">End date</label>
        <input
          id="end_date"
          className="form-field"
          type="date"
          placeholder="End date"
          name="end_date"
          value={values.end_date || ""}
          onChange={handleInputChange}
        />

        <label htmlFor="category">Category (i.e. backpacking/camping)</label>
        <input
          id="category"
          className="form-field"
          type="text"
          placeholder=""
          name="category"
          value={values.category || ""}
          onChange={handleInputChange}
        />

        <label htmlFor="miles">Number of miles</label>
        <input
          id="miles"
          className="form-field"
          type="number"
          placeholder=""
          name="miles"
          value={values.miles || 0}
          onChange={handleInputChange}
        />

        <label htmlFor="difficulty">
          Difficulty (i.e. easy/moderate/difficult)
        </label>
        <input
          id="difficulty"
          className="form-field"
          type="text"
          placeholder=""
          name="difficulty"
          value={values.difficulty || ""}
          onChange={handleInputChange}
        />

        <label htmlFor="rating">Excitement level (apathetic ... pumped!)</label>
        <input
          id="rating"
          className="form-field"
          type="range"
          placeholder="Rating"
          name="rating"
          value={values.rating || 0}
          onChange={handleInputChange}
        />

        <label htmlFor="notes">Trip notes</label>
        <input
          id="notes"
          className="form-field"
          type="text"
          placeholder=""
          name="notes"
          value={values.notes || ""}
          onChange={handleInputChange}
        />

        <input type="submit" value="Submit"></input>
        <button>
          <a href="http://localhost:3001/packit">Start packing</a>
        </button>
      </form>
    </div>
  );
}
