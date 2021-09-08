import React, {Component} from "react";
import AddingItem from "./addingform.js";
// import Items from "./All items.js";
class List extends Component {
    render() {
        return (
            <div>
                {/* <Items/> */}
                <AddingItem/>
                <h3> Items</h3>
            </div>
        )
    }
}

export default List 