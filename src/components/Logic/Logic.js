import React, { Component } from "react";
import Row from "../Row";
import Card from "../Card";
import Scoreboard from "../Scoreboard";
import cards from "../../cards.json";

class App extends Component {
  state = {
    cards,
    score: 0
  };

  //shuffle cards after first rend on client side
  componentDidMount() {
    this.setState({ cards: this.shuffle(this.state.cards) });
  }

  //function to shuffle cards
  shuffle = cards => {
    for (let i = cards.length - 1; i > 0; i--) {
      //get rounded-down random number to represent new index of this card
      const j = Math.floor(Math.random() * (i + 1));
      //swap this card with index at random number
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  }

  //handle click event; passes in id of what was clicked
  onClick = id => {
    //get index of what was clicked
    const index = this.state.cards.findIndex(el => el.id === id);

    //copy deck into temporary array
    let updatedCards = [...this.state.cards];

    //if the card wasn't previously clicked this round...
    if (!this.state.cards[index].clicked) { 
      //set it to be clicked  
      updatedCards[index].clicked = true;
      //add 1 to score (use prevState to avoid issues)
      this.setState(prevState => ({
        score: prevState.score + 1
      }));
    }
    //if card was previously clicked...
    else {
      //reset the cards in temp deck
      updatedCards.forEach(el=>{
        el.clicked = false;
      });
      //reset the score
      this.setState({ score: 0 })
    }

    //now shuffle temp deck and put them into state deck
    this.setState({ cards: this.shuffle(updatedCards) });
  }

  //render the game
  render() {
    return (
      <div>
        <Scoreboard score={this.state.score} />
        <Row>
          {this.state.cards.map(card => (
            <Card
              key={card.id}
              id={card.id}
              src={card.src}
              onClick={this.onClick}
            />
          ))}
        </Row>
      </div>
    );
  }
}

export default App;
