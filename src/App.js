import React, { Component } from 'react';
import TheDate from './state/TheDate'
import Counter from './state/Counter'
class App extends Component {
  render(){
    return(
<div>
<TheDate /> 
<Counter />
</div>
    )  

  }  
}
export default App;