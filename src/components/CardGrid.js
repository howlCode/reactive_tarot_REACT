import React, { Component } from 'react'
import CardModal from './CardModal'

class CardGrid extends Component {

  state = {
    card: [],
    isOpen: false
  }

  randAlign = () => {
    let imgAlign = ['card-img-reverse', 'card-img']
    return imgAlign[Math.floor(Math.random()*imgAlign.length)]
  }

  cardModal = (card) => {
    this.setState({ card: card, isOpen: true })
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  componentWillMount = () => {
    return (<a class="button is-loading">Loading</a>)
  }


  render() {
    let cardGridContent
    let positions = []

    const { cards, spread } = this.props

    switch (spread) {
      case 'three':
        if(cards.length === 3) {
          positions = ['The Past', 'The Present', 'The Future']
          cards[0].position = positions[0]
          cards[1].position = positions[1]
          cards[2].position = positions[2]
        }
        break;
      case 'celticCross':
        if(cards.length === 10) {
          positions = ['Represents You', 'Your Obstacle', 'Influences', 'The Root of The Query', 'The Past', 'Near Future',
                       'Best Approach to Query', 'The Environment Around the Query', 'Your Hopes and Fears', 'Ultimate Potential Outcome']
          cards[0].position = positions[0]
          cards[1].position = positions[1]
          cards[2].position = positions[2]
          cards[3].position = positions[3]
          cards[4].position = positions[4]
          cards[5].position = positions[5]
          cards[6].position = positions[6]
          cards[7].position = positions[7]
          cards[8].position = positions[8]
          cards[9].position = positions[9]
        }
        break;
      default:
        positions = []
        break;
    }

    if(cards) {
      cardGridContent = (
        <div className="container has-text-centered card-container">
        <br />
          <div className="columns is-multiline is-centered">
            { cards.map(card => (
                <div className="column is-one-quarter" key={card.id} onClick={() => this.cardModal(card)}>
                  <div className="card">
                    <p className="is-bold has-text-centered position">{card.position}</p>
                    <div className="card-image">
                      <figure className="image is-300x300">
                        <img src={card.face_image_url} alt={card.name} className='card-img' />
                      </figure>
                    </div>
                    <div className="card-content">
                      <p className="is-italic has-text-centered">{card.up}</p>
                    </div>
                  </div>
                </div>
            )) }
          </div>
          { this.state.card.length !== 0 ? (<CardModal card={this.state.card} onClose={this.toggleModal} show={this.state.isOpen} />) : null }
      </div>
      )
    } else {
      cardGridContent = null
  }
    return (
      <div>
        {cardGridContent}
      </div>
    )
  }
}

export default CardGrid
