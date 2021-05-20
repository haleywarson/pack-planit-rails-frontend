import React from "react";

import PackItItem from "./PackItItem"

export default function PackItList(props) {

    const showItems = () => {
        return props.items.map((item) => (
            <PackItItem
                item={item}
                removeItem={props.removeItem}
                key={item.id}
            />
        ));
    };

    return (
        <div className="pack-it-list">
            <ul>{showItems()}</ul>
            <div>
                <button
                    className="create-list"
                    onClick={() => props.addList()}
                >
                    Complete list
                </button>
                <button
                    id="list-delete-button"
                    onClick={() => props.removeList()}
                >
                    Clear all
                </button>
            </div>
        </div>
    );
}
