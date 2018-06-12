import React, { Component } from 'react';
import CardModal from './CardModal';

class CardGrid extends Component {

  state = {
    card: [],
    isOpen: false
  }

  randAlign = () => {
    let imgAlign = ['card-img-reverse', 'card-img'];
    return imgAlign[Math.floor(Math.random()*imgAlign.length)];
  }

  cardModal = (card) => {
    this.setState({ card: card, isOpen: true }); 
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    let cardGridContent;
    
    const { cards } = this.props;

    if(cards) {
      cardGridContent = (
        <div className="container has-text-centered">
          <div className="columns is-multiline is-centered">
            { cards.map(card => (
              <div className="column is-one-quarter" key={card.id} onClick={() => this.cardModal(card)}>
                <img src={card.face_image_url} alt={card.name} className={this.randAlign()} />
                <p>{card.up.toUpperCase()}</p>
              </div>
            )) }
          </div>
        { this.state.card.length !== 0 ? (<CardModal card={this.state.card} onClose={this.toggleModal} show={this.state.isOpen} />) : null }
      </div>
      )
    } else {
      cardGridContent = null;
    }

    return (
      <div>
        {cardGridContent}
      </div>
    )
  }
}

export default CardGrid;