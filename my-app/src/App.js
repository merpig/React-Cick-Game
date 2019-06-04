import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Container from "./components/Container";
import Row from "./components/Row";
import Column from "./components/Column";
import Images from "./images.json";
import Card from "./components/Card";

//import logo from './logo.svg';
import './App.css';

let defaultMessage = "Click an image you haven't clicked yet!";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  
  state = {
    Images,
    score: 0,
    highScore: 0,
    status: defaultMessage,
    clicked: [],
  };

  shuffle = () => {
    this.setState({ Images: shuffleArray(Images) });
  };

  click = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.inc();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.reset("You clicked incorrectly!");
    }
  };

  inc = () => {
    const tempScore = this.state.score + 1;
    this.setState({
      score: tempScore,
      status: "You clicked correctly!"
    });
    if (tempScore >= this.state.highScore) {
      this.setState({ highScore: tempScore });
    }
    else if (tempScore === 12) {
      this.setState({ status: "You win!" });
    }
    this.shuffle();
  };

  reset = msg => {
    this.setState({
      score: 0,
      highScore: this.state.highScore,
      status: msg,
      clicked: []
    });
    this.shuffle();
  };

  render() {
    return (
      <div className="App">
        <Navbar
        title="Clicky Game"
        score={this.state.score}
        highScore={this.state.highScore}
        status={this.state.status}
        />
        <Container>
          <br></br><br></br><br></br><br></br><br></br><br></br>
          <Row>
            {this.state.Images.map(image => (
              <Column key={image.id}>
                <Card
                  key={image.id}
                  click={this.click}
                  inc={this.inc}
                  reset={this.reset}
                  shuffle={this.shuffle}
                  id={image.id}
                  image={image.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
