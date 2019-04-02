import React, { Component } from 'react';
import './App.css';
import { GameCards, GameCard } from "./components/GameCards";
import ScoreBoard from "./components/Score";
import Banner from "./components/Banner";

const defaultCardState = [{ id: 0, img: "./img/mario.png", picked: false }, { id: 1, img: "./img/luigi.png", picked: false }, { id: 2, img: "./img/bowser.png", picked: false }, { id: 3, img: "./img/daisy.png", picked: false }, { id: 4, img: "./img/peach.png", picked: false }, { id: 5, img: "./img/rosalina.png", picked: false }, { id: 6, img: "./img/waluigi.png", picked: false }, { id: 7, img: "./img/wario.png", picked: false }, { id: 8, img: "./img/yoshi.png", picked: false }];

class App extends Component {
  state = {
    cards: [{ id: 0, img: "./img/mario.png", picked: false }, { id: 1, img: "./img/luigi.png", picked: false }, { id: 2, img: "./img/bowser.png", picked: false }, { id: 3, img: "./img/daisy.png", picked: false }, { id: 4, img: "./img/peach.png", picked: false }, { id: 5, img: "./img/rosalina.png", picked: false }, { id: 6, img: "./img/waluigi.png", picked: false }, { id: 7, img: "./img/wario.png", picked: false }, { id: 8, img: "./img/yoshi.png", picked: false }],
    score: 0,
    highScore: 0
  };

  componentDidMount() {
    this.shuffleCards();
  }

  resetGame(){
    console.log("***********will reset**********")

    //deep copy rather than by reference
    const restoreDefaultCards = JSON.parse(JSON.stringify(defaultCardState));

    this.setState({score: 0,
      cards: restoreDefaultCards
    }, () => this.shuffleCards());
  }

  cardClicked(id) {
    console.log("entered");
    const newScore = this.state.score + 1;
    let highScore = this.state.highScore;
    if (newScore > highScore) {
      highScore = newScore;
    }
    const updateCardState = this.state.cards.slice();
    updateCardState[id].picked = true;
    this.setState({
      score: newScore,
      highScore: highScore,
      cards: updateCardState
    }, () => this.shuffleCards());
  }

  handleOnClick(id) {
    // () => {this.state.cards[id].picked ?  this.cardClicked(id) : this.resetGame()};
    console.log(this.state.cards[id].picked);
    if (!this.state.cards[id].picked) {
      this.cardClicked(id);
    } else {
      this.resetGame();
    }
  }

  //note to self, in future, create pure functions, shuffle cards should only shuffle cards
  //create a setter function to set / change the state
  shuffleCards = () => {
    console.log("init shuffle")
    console.log(this.state.cards);
    let shuffledCardsState = this.state.cards.slice();

    for (var i = this.state.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      const temp = shuffledCardsState[i];

      shuffledCardsState[i] = shuffledCardsState[j];
      shuffledCardsState[j] = temp;
    }

    this.setState({ cards: shuffledCardsState });
  };

  render() {
    return (
      <div className="main-container">
        <Banner />
        <ScoreBoard
          score={this.state.score}
          highscore={this.state.highScore}
        />
        <div className="game-container container valign center">
          <GameCards>
            {this.state.cards.map((card, i) =>
              <GameCard
                img={card.img}
                onClick={this.handleOnClick.bind(this, i)}
                key={card.id}
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
