import React, { Component } from 'react';
import '../assets/css/foodlist.css';

export default class FoodList extends Component {

  render() {


    var foodEntries = this.props.entries;

    function createFood(item) {
      return <li key={item.key}>{item.name}</li>
    }

    var foodItems = foodEntries.map(createFood);

    console.log(foodItems);

    return (
      <ul className="theList">
        {foodItems}
      </ul>
    );

  }

}