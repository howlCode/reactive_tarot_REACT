import React, { Component } from 'react'
import CardGrid from './CardGrid'
import axios from 'axios'

const getCardsUrl = 'https://tarot.howlcode.com/cards'
const getShuffledCardsUrl = 'https://tarot.howlcode.com/spreads/shuffled'
const getRandomCardUrl = 'https://tarot.howlcode.com/spreads/random_card'
const getThreeCardsUrl = 'https://tarot.howlcode.com/spreads/three_cards'
const getCelticCrossUrl = 'https://tarot.howlcode.com/spreads/celtic_cross'

class Spreads extends Component {
  state = {
    cards: [],
    cardsUrl: '',
    spread: ''
  }

  handleChange = (e) => {
    const spreadStyle = {
      'three': getThreeCardsUrl,
      'random': getRandomCardUrl,
      'celticCross': getCelticCrossUrl,
      'shuffled': getShuffledCardsUrl,
      'all': getCardsUrl
    }
    this.setState({ cardsUrl: spreadStyle[e.target.value] })
    this.setState({ spread: e.target.value })
  }

  getCards = () => {
    axios.get(this.state.cardsUrl)
    .then(res => this.setState({ cards: res.data }))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid has-text-centered selection-box">
        <br />
          <div className="select">
            <select name="cardsUrl" onChange={this.handleChange}>
            <option value="" selected disabled hidden>Choose Your Spread</option>
              <option value={"random"}>Draw a Random Card</option>
              <option value={"three"}>Draw Three Cards</option>
              <option value={"celticCross"}>Draw a Celtic Cross Spread</option>
              <option value={"shuffled"}>Draw a Shuffled Deck</option>
              <option value={"all"}>Draw All Cards</option>
            </select>
          </div>
          <button className="button show-cards-button" onClick={this.getCards}>Show Cards</button>
          <br />
          <br />             
        </div>
        { this.state.cards.length > 0 ? (<CardGrid cards={this.state.cards} spread={this.state.spread} />) : null }
      </React.Fragment>
    )
  }
}

export default Spreads