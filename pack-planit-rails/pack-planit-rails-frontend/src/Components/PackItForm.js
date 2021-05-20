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
            <label htmlFor="item">Item</label>
            <input
                className="form-field"
                type="text"
                name="item"
            />
            <input type="submit" value="Add item"/>
        </form>
    );
}
