//adding items
import React, { Component } from "react";

class AddingItem extends Component {
  state = {
    item: "",
    units: "",
    quantity: "",
    isPurchased: false,
    groceries: [
      {
        item: "apples",
        units: "ea",
        quantity: 5,
        isPurchased: false,
      },
      {
        item: "bananas",
        units: "lb",
        quantity: 2,
        isPurchased: false,
      },
      {
        item: "lemon",
        units: "lb",
        quantity: 25,
        isPurchased: false,
      },
    ],
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isPurchased: true });
    const {groceries} = this.state;
    let newItems = {
      item: this.state.item,
      units: this.state.units,
      quantity: this.state.quantity,
      isPurchased: true,
    };
    this.setState({
      groceries: this.state.groceries.concat(newItems),
      item: "",
      units: "",
      quantity: "",
    });
  };
  handleChange = (event) =>{
      this.setState({[event.target.id]: event.target.value})
  }

  render() {
    return (
        <>
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="item name" />
        <input type="text" placeholder="units" />
        <input type="text" placeholder="quantity" />
        {/* <input type="checkbox"/>Purchased */}
        <button type="submit">Add to List</button>
      </form>
      <ul>
          <li>{this.state.newItems}</li>
      </ul>
      </>
    );
  }
}

export default AddingItem;
