import React, {Component} from 'react';

class Landing extends Component{
  
  /* Set up state for landing page to cycle through images */
  constructor(props) {
      super(props);
      this.state = {
        /*next image background*/
        backgroundImage: 1
      };
    }

  componentDidMount() {
    this.setTimeout( () => {
       this.setTimePassed();
    }, 1000);
  }

  setTimePassed() {
    this.setState({backgroundImage: newbackgroundImage})    
  }
  
  render() {

    var newbackgroundImage = (this.state.backgroundImage === 3) ? 1 : this.state.backgroundImage + 1;

    var imgUrl = '../assets/images/bg' + this.state.backgroundImage + '.jpg';
    var divStyle = {
      backgroundImage: 'url(' + imgUrl + ')'
    };

    return(
      <div style={divStyle} className="bg-wrapper">
        <h1>Today I Feel Like: </h1>
      </div>
    )
  }

export default Landing;S