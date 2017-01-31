import React, {Component} from 'react';

import { Jumbotron } from 'react-bootstrap'
import bg from '../assets/images/bg.jpg';
//import bg2 from '../assets/images/bg2.jpg';
import RandomFood from './RandomFood';
import AddFood from './AddFood'
import '../assets/css/Landing.css';


class Landing extends Component {

  render() {

    const divStyle = {
      color: '#fff',
      fontFamily: 'Cabin',
      fontWeight: '700',
      fontSize: '7em'
    };

    const jumboStyle = {
      backgroundImage: 'url(' + bg +')',
      textAlign: 'center'
    }

    const subStyle = {
      fontFamily: 'Railway',
      fontSize: '3em',
      color: '#fff'
    }

    return (
      <div>
        <Jumbotron style={jumboStyle}>
          <h1 style={divStyle}>FudGods</h1>
          <p style={subStyle}>Pray to the gods of burgers and fries.</p>
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
