import React from "react";
class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
  render() {
    let message;
    if (this.state.count % 2 === 0) {
      message = "tick";
    } else {
      message = "tock";
    }
    if (this.state.count >= 8) {
      message = "boom";
    }
    return (
      <div>
        <p>{message}</p>
      </div>
    );
  }
}
export default Bomb;
