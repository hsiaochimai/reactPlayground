import React from "react";
class RouletteGun extends React.Component {
  static defaultProps={
      bulletInChamber: 8
  };
    constructor(props) {
    super(props);
    this.state = {
      chamber: null,
      spinningTheChamber: false

    };
  }
  
componentWillUnmount(){
    clearTimeout(this.timeout)
}
handleClick=()=>{
    this.setState({spinningTheChamber:true})

this.timeout= setTimeout(()=>{
    const randomChamber=Math.ceil(Math.random() * 8)
console.log(randomChamber)
    this.setState({
        chamber:randomChamber,
        spinningTheChamber:false,
    })
},2000)
console.log(this.state)
}
  renderDisplay(){
      const {chamber, spinningTheChamber}=this.state
      const {bulletInChamber}=this.props
      if (spinningTheChamber){
          return 'spinning the chamber and pulling the trigger!'
      }
      else if(chamber===bulletInChamber){
          console.log(bulletInChamber)
          return 'BANG!!!!'
      }
      else{
          return "you're safe!"
      }
  }
render(){ 

      return(
          <div>
              <p>{this.renderDisplay()}</p>
              <button onClick={this.handleClick}>Pull the trigger!</button>
          </div>
      );
  }
}
export default RouletteGun
