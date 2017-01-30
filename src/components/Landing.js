import React, {Component} from 'react';

import { Jumbotron } from 'react-bootstrap'
//import bg1 from '../assets/images/bg1.jpg';
//import bg2 from '../assets/images/bg2.jpg';
import RandomFood from './RandomFood';
import AddFood from './AddFood'
import '../assets/css/Landing.css';


class Landing extends Component {

  render() {
    return (
      <div className="container">
        <Jumbotron>
          <h1>FudGods</h1>
          <p>Pray to the gods of burgers and fries.</p>
        </Jumbotron>
        <AddFood />
      </div>  
    );
  }
}

export default Landing;


  /* Set up state for landing page to cycle through images
  constructor(props) {
    super(props);
    this.state = {
      //next image background
      backgroundImage: bg1
    };
  }

  componentDidMount() {
    setTimeout( () => {
       this.setTimePassed();
    }, 3200);
  }

  setTimePassed() {
    this.setState(
      {
        backgroundImage: bg2
      }
    )
  }

  render() {

    var divStyle = {
      background: 'url(' + this.state.backgroundImage + ')',
      backgroundSize: "cover",
      bakcgroundRepeat: "no-repeat"
    };

    return(
      <div style={divStyle} className="bg-wrapper">
      </div>
    );
  }
  */
