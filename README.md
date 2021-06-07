# Pack Planit

## Table of Contents

[General Info](#general-info)
[Technologies](#technologies)
[Demo](#demo)
[Setup](#setup)
[Features](#features)
[Code Examples](#code-examples)
[Inspiration](#inspiration)
[Contact](#contact)

## General Info

Pack Planit helps you plan for and pack for your next camping or backpacking trip!
The backend repo for this project can be found [here](https://github.com/haleywarson/pack-planit-rails-backend).

## Technologies

- React
- CSS
- Html
- JSX
- Rails
- Ruby

## Demo

https://www.youtube.com/watch?v=22WPs-L9jLA 

## Setup

First, fork and clone the backend repo here. Open the code, run "bundle install" and "rails s". 
Then fork and clone this repo, open the code, run "npm install" and "npm start."

## Features

- Plan a trip by using the "Planit" form.
- Review your trip log, and click on trips to view details.
- Pack for your trip by adding/removing items on a packing list.
- Save your packing list to an existing trip.
- Review the packing lists from past trips in your trip log.

## Code Examples

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
```rb
class ListsController < ApplicationController

    before_action :find_list, only: [:show, :update, :destroy]

    def index
        @lists = List.all 
        render json: @lists, include: [:trips]
    end

    def show
        render json: @list, include: [:trips]
    end 

    def create
        @list = List.create name: params[:name], items: params[:items]
        render json: @list, include: [:trips]
    end

    def update
        @list.update name: params[:name], items: params[:items]
        render json: @list, include: [:trips]
    end

    def destroy
        @list.destroy 
    end 

    private 

    def find_list
        @list = List.find params[:id]
    end 

end
```

## Inspiration

The beautiful and welcoming mountains of Colorado! 

## Contact

Pack Planit was created by [Haley Warson](https://www.linkedin.com/in/haleywarson/).

Contact me with any questions.
