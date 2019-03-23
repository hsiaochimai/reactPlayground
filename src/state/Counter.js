import React from 'react'
class Counter extends React.Component {
    state = {
      count: 0
    };
    render() {
      return (
        <div>
          <p>The current count: {this.state.count}</p>
          <button>
            Add 1
          </button>
        </div>
      )
    }
  }
  export default Counter