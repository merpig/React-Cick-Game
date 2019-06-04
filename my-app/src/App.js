import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Container from "./components/Container";
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar
        title="Clicky Game"
        score={0/*this.state.currentScore*/}
        highScore={0/*this.state.highScore*/}
        status={"Click an image you haven't clicked yet!" /*this.state.status*/}
        />
        <Container>
          <br></br><br></br><br></br>
          <p>Hello</p>
        </Container>
      </div>
    );
  }
}

export default App;
