import React, { Component } from 'react';

import FoodList from './FoodList';
import RandomFood from './RandomFood';
import '../assets/css/addfood.css';

export default class AddFood extends Component {

  constructor(props) {
    super(props);
    this.addPlace = this.addPlace.bind(this);
    this.state = {
      places: []
    }
  }

  addPlace(e) {

    e.preventDefault();
    var foodArray = this.state.places;

    foodArray.push(
      {
        name : this._inputElement.value,
        key: Date.now()
      });

    this.setState({places : foodArray});

    this._inputElement.value = '';
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <div className="food-list">
              <div className="header">
                <form onSubmit={this.addPlace}>
                  <input ref={(a) => this._inputElement = a} placeholder="enter food"></input>
                  <button type="submit">add</button>
                </form>
              </div>
              <FoodList entries={this.state.places} />
            </div>
          </div>
         
          <RandomFood entries={this.state.places} />
          
        </div>
      </div>
    );
};

}