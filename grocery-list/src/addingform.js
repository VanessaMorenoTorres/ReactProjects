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
        units: "ea",
        quantity: 25,
        isPurchased: false,
      },
    ],
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isPurchased: false });
    const { groceries } = this.state;
    let newItems = {
      item: this.state.item,
      units: this.state.units,
      quantity: this.state.quantity,
      isPurchased: false,
    };
    this.setState({
      groceries: this.state.groceries.concat(newItems),
      item: "",
      units: "",
      quantity: "",
      isPurchased: false
    });
    console.log(newItems)
  };
  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="item name" onChange={this.handleChange.bind(this)} id="item" required/>
          <input type="text" placeholder="units" onChange={this.handleChange.bind(this)} id="units" required/>
          <input type="text" placeholder="quantity" onChange={this.handleChange.bind(this)} id="quantity" required/>
          <button type="submit" >Add to List</button>
        </form>
        <ul>
          {this.state.groceries.map((grocery, index)=> 
          grocery.isPurchased ? "" : 
          <li>{grocery.quantity + " " + grocery.units + " " + grocery.item}   <input type="checkbox"/>Purchased</li>)}
        </ul>
      </div>
    );
  }
}

export default AddingItem;
