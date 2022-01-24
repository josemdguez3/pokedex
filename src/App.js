import React from 'react';
import PokedexHeader from './components/PokedexHeader';
import './App.css';

class App extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    name: "Jose"
  }
}

 render() {
 return (
    <div className="App">
    <PokedexHeader
      author={'@josemdguez3'} 
      name={this.state.name} 
     />
    </div>
  ); 
}
}

export default App;
