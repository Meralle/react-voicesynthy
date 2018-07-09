import React, { Component } from 'react';
import './App.css';
import VoiceSynthesizer from './Components/VoiceSynthesizer';


class App extends Component {
    state = {
      voice: 'Fiona',
      text: 'Hello, I am Fiona. please type someting',
      textToAdd: '',
      pitch: 1.4,
      rate:0.9,
  }
  addText = (e) => {
    const textToAdd = e.target.value
    this.setState({textToAdd})

  }
  //moving things from the addText
  sayMyText = () => {
    const textToAdd = this.state.textToAdd;
    this.setState({
      text: textToAdd, 
      textToAdd:''
    })
  }
  
  render() {
    return (
      <div className="App">
        <div className="container">  
            <form className  ="row input-field col-s6 ">
              <img src="./avatar.png" alt="avatar"/>
              <input value={this.state.textoAdd} onChange={this.addText} placeholder="type anyting"/>
              <button onClick={this.sayMyText}>Submit</button>
            </form>
         </div>
           <VoiceSynthesizer
             text={this.state.text}
             voice={this.state.voice}
             pitch={this.state.pitch}
             rate={this.state.rate} />
      </div>
       
    );
  }
}

export default App;
