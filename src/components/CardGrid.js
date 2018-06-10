import React, { Component } from 'react'

class CardGrid extends Component {

  render() {
    let cardGridContent;
    const { cards } = this.props;

    if(cards) {
      cardGridContent = (
        <div className="container has-text-centered">
          <div className="columns is-multiline is-centered">
            { cards.map(card => (
              <div className="column is-one-quarter" key={card.id}>
                <img src={card.face_image_url} alt={card.name} style={{ 'height': '300px' }}/>
                <p>{card.up}</p>
              </div>
            )) }
          </div>
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