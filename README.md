# Pack Planit

## Table of Contents

[General Info](#general-info)

[Demo](#demo)

[Technologies](#technologies)

[Setup](#setup)

[Features](#features)

[Code Example](#code-example)

[Inspiration](#inspiration)

[Contact](#contact)

## General Info

Pack Planit helps you plan for and pack for your next camping or backpacking trip!

## Demo

![Demo]()

## Technologies

- React
- CSS
- Html
- JSX
- Rails
- Ruby

## Setup

First, fork and clone the backend repo here. Open the code, run "bundle install" and "rails s". 
Then fork and clone this repo, open the code, run "npm install" and "npm start."

## Features

- Plan a trip by using the "Planit" form.
- Review your trip log, and click on trips to view details.
- Pack for your trip by adding/removing items on a packing list.
- Save your packing list to an existing trip.
- Review the packing lists from past trips in your trip log.

## Code Example

```js
  const addList = () => {
    setLists(items);
    fetch(listsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: listName,
        items: items
      }),
    })
      .then((res) => res.json())
      .then(
        (data) => setListId(data.id),
        setItems([]),
        setListName([])
      );

    fetch(tripListsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        trip_id: tripId,
        list_id: listId
      }),
    });
  };
```

## Inspiration

The beautiful and welcoming mountains of Colorado! 

## Contact

Pack Planit was created by [Haley Warson](https://www.linkedin.com/in/haleywarson/).

Contact me with any questions.
