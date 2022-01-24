import React from 'react';
import PokedexHeader from './components/PokedexHeader';
import {
  Input,
  Segment
  
}from 'semantic-ui-react'
import './App.css';

class App extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    author: '@josemdguez3',
    name: "Jose"
  }
  this.onChange = this.onChange.bind(this)
}
onChange(event, data) {
    
    console.log(data.value)
    this.setState({
      name: data.value})
}
 render() {
   console.log(this.state)
 return (
    <div className="App">
    <PokedexHeader
      author={this.state.author} 
      name={this.state.name} 
     />
      <Segment basic inverted color='yellow' secondary>
        
      <Input
        label={"Input Form"}  
        onChange={this.onChange}
        value={this.state.name}/>
     </Segment>
    </div>
  ); 
}
}

export default App;
