import React from 'react'

import PackItList from './PackItList'

export default function PackItListContainer(props) {

    return (
        <div className="pack-it-list-container">
            <h2>Packing List: {props.listName}</h2>
            <PackItList
                listName={props.listName}
                lists={props.lists}
                addList={props.addList}
                items={props.items}
                removeItem={props.removeItem}
                removeList={props.removeList}
            />
        </div>
    );
}
