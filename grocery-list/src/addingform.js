//adding items
import React, { Component } from 'react';

class AddingItem extends Component {
    render() {
        return(
            <form>
                <input type="text" placeholder="item name"/>
                <input type="text" placeholder="units"/>
                <input type="text" placeholder="quantity"/>
                {/* <input type="checkbox"/>Purchased */}
                <button>Add to List</button>
            </form>
        )
    }
}

export default AddingItem