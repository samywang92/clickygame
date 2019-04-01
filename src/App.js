import React, { Component } from 'react';
import './App.css';
import { GameCards, GameCard } from "./components/GameCards";
import ScoreBoard from "./components/Score";
import Banner from "./components/Banner";

const initCardsState = [{ id: 0, img: "./img/mario.png", picked: false }, { id: 1, img: "./img/luigi.png", picked: false }, { id: 2, img: "./img/bowser.png", picked: false }, { id: 3, img: "./img/daisy.png", picked: false }, { id: 4, img: "./img/peach.png", picked: false }, { id: 5, img: "./img/rosalina.png", picked: false }, { id: 6, img: "./img/waluigi.png", picked: false }, { id: 7, img: "./img/wario.png", picked: false }, { id: 8, img: "./img/yoshi.png", picked: false }];

class App extends Component {
  state = {
    cards: initCardsState,
    score: "",
    highScore: ""
  };

  componentDidMount() {
    this.shuffleCards();
  }

  handleOnClick(id){
    console.log("entered here"+id);
    this.shuffleCards();
  }

  shuffleCards = () => {
    let shuffledCardsState = [].concat(initCardsState);
    
    for (var i = this.state.cards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = shuffledCardsState[i];
      
      shuffledCardsState[i] = shuffledCardsState[j];
      shuffledCardsState[j] = temp;
    }

    this.setState({cards: shuffledCardsState});
  };

  render() {
    return (
      <div className="main-container">
        <Banner/>
        <ScoreBoard
          score={this.state.score}
          highscore={this.state.highScore}
        />
        <div className="game-container container valign center">
        <GameCards>
          {this.state.cards.map((card,i) => 
            <GameCard
                img = {card.img}
                onClick={this.handleOnClick.bind(this, card.id)}
                key = {i}
            />
          )}
        </GameCards>
        <div className="row">
            <p>Try to select all the cards with out picking the same one twice!</p>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
