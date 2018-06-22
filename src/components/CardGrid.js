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


  render() {
    let cardGridContent
    let positions = []

    const { cards, spread } = this.props

    switch (spread) {
      case 'three':
        positions = ['The Past', 'The Present', 'The Future']
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
                    <div className="card-image">
                      <figure className="image is-300x300">
                        <img src={card.face_image_url} alt={card.name} className={this.randAlign()} />
                      </figure>
                    </div>
                    <div className="card-content">
                      <p className="is-italic has-text-centered">position</p>  
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