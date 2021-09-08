import React, { Component } from 'react';

class Items extends Component{
   state ={
        item: '',
        units: '',
        quantity: '',
        isPurchased: false, 
        groceries: [
        {
           item: 'apples',
           units: 'ea',
           quantity: 5,
           isPurchased: false 
        },
        {
            item: 'bananas',
            units: 'lb',
            quantity: 2,
            isPurchased: false
        },
        {
           item: 'lemon',
           units: 'lb',
           quantity: 25,
           isPurchased: false,
        },
    ]}
    render(){
        return(
          "Fill in the sections below to add item to list:" 
        )
    }
}

export default Items

// let newItems = {
//     item: this.state.item,
//     units: this.state.units,
//     quantity: this.state.quantity,
//     isPurchased: true
// }