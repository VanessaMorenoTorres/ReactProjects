import React, {Component} from "react";
import AddingItem from "./addingform.js";
// import Items from "./All items.js";
class List extends Component {
    render() {
        return (
            <div>
                Fill in the sections below to add item to list:
                <AddingItem/>
            </div>
        )
    }
}

export default List 