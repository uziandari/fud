import React, {Component} from 'react';

import bg1 from '../assets/images/bg1.jpg';
import bg2 from '../assets/images/bg2.jpg';
import '../assets/css/Landing.css';

class Landing extends Component {

  /* Set up state for landing page to cycle through images */
  constructor(props) {
    super(props);
    this.state = {
      /*next image background*/
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
}
export default Landing;
