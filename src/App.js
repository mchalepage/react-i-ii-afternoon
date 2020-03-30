import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header'
import Slide from './Components/Slide'

class App extends Component{
  constructor(){
    super()

    this.state = {
      slides: []
    }
  }
  render (){
    return(
      <div className="App"> 
        <Header />
        <Slide />
      </div>
    )
  }
}

export default App;
