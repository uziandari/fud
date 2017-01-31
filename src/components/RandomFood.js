import React, { Component } from 'react';

import '../assets/css/randomfood.css';

export default class RandomFood extends Component {
  constructor(props) {
    super(props);
    this.pickFood = this.pickFood.bind(this);
    this.state = {
      clicked: false,
      food: null
    }
  }

  componentWillUnmount() {
    this.setState({
      clicked: false,
      food: null
    })
  }

  pickFood() {
    
    var foodEntries = this.props.entries;
    var randomFood = Math.floor((Math.random() * (foodEntries.length)));

    this.setState({
      clicked : true,
      food: foodEntries[randomFood].name
    })
    
    console.log(this.state.food);
    console.log(this.state.clicked);

  }

  render() {

    const clicked = this.state.clicked;
    const food = this.state.food;

    return (
      <div className="col-sm-6 select">
        <button onClick={this.pickFood}>{clicked ? 'Offer another Tribute' : 'Offer Tribute'}</button>
        <br />
        <br />
        <h3>{food ? `The gods have chosen: ${food}` : "Don't anger the gods." }</h3>
      </div>
    );


  }

}