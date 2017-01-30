import React, { Component } from 'react';

export default class RandomFood extends Component {
  constructor(props) {
    super(props);
    this.pickFood = this.pickFood.bind(this);
    this.state = {
      clicked: false,
      food: ''
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

    var godsText = `The gods have chosen: ${food}`;


    return (
      <div className="col-md-2">
        <button onClick={this.pickFood}>{clicked ? 'Offer another Tribute' : 'Offer Tribute'}</button>
        <br />
        <br />
        <h3>{food ? godsText : "" }</h3>
      </div>
    );


  }

}