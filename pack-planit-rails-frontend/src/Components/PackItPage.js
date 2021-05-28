import React, { useState, useEffect } from "react";

import PackItForm from "./PackItForm";
import PackItListContainer from "./PackItListContainer";

const listsUrl = "http://localhost:3000/lists/";
const tripsUrl = "http://localhost:3000/trips/";
const tripListsUrl = "http://localhost:3000/trip_lists";

export default function PackItPage() {
  const [lists, setLists] = useState([]);
  const [listName, setListName] = useState([]);
  const [items, setItems] = useState([]);
  const [trips, setTrips] = useState([]);
  const [tripLists, setTripLists] = useState([]);

  // Data fetch
  const fetchTrips = () => {
    fetch(tripsUrl)
      .then((res) => res.json())
      .then(setTrips);
  };

  const fetchTripLists = () => {
    fetch(tripListsUrl)
      .then((res) => res.json())
      .then(setTripLists);
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  // Event handlers
  const handleListNameChange = (event) => {
    event.persist();
    const newListName = event.target.value;
    setListName(newListName);
  };

  const handleTripsChange = (event) => {
    event.persist();
    const tripId = event.target.value;
    console.log(tripId);
    // setTripLists(
    //     ...tripLists,
    //     trip_id: tripId,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = event.target.item.value;
    setItems([...items, newItem]);
    event.target.item.value = "";
  };

  // Add/remove functions
  const addItem = (newItem) => {
    setItems(newItem);
  };

  const removeItem = (itemToRemove) => {
    let filteredItems = items.filter((item) => {
      return item !== itemToRemove;
    });
    setItems(filteredItems);
  };

  const addList = () => {
    console.log("adding list...");
    setLists(items);
    fetch(listsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: listName,
        items: items,
      }),
    });
    fetch(tripListsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tripLists,
      }),
    });
    setItems([]);
    setListName([]);
  };

  const removeList = () => {
    setItems([]);
    setListName([]);
  };

  return (
    <div className="pack-it-page">
      <PackItForm
        items={items}
        handleListNameChange={handleListNameChange}
        handleSubmit={handleSubmit}
        addItem={addItem}
        listName={listName}
        fetchTrips={fetchTrips}
        trips={trips}
        handleTripsChange={handleTripsChange}
      />
      <PackItListContainer
        listName={listName}
        lists={lists}
        addList={addList}
        removeItem={removeItem}
        items={items}
        removeList={removeList}
      />
    </div>
  );
}
