import React from 'react'

const CardModal = (props) => {

  if(!props.show) {
    return null
  }

  return(
    <div className="modal is-active">
      <div className="modal-background"></div>
        <div className="modal-content">
          <div><h1 className="title">{props.card.name}</h1><span><img src={props.card.face_image_url} alt={props.card.name} /></span></div>
          <hr />
          <p className="has-text-justified"><span className="is-italic">Summary: </span>{props.card.short_meaning}</p>
          <hr />
          <p className="has-text-justified"><span className="is-italic">Meaning: </span>{props.card.full_meaning}</p>
          <hr />
          <p className="has-text-left"><span className="is-italic">Upright: </span>{props.card.up}</p>
          <p className="has-text-left"><span className="is-italic">Reversed: </span>{props.card.reverse}</p>
        </div>
      <button className="modal-close is-large" aria-label="close" onClick={props.onClose}></button>
    </div>
  )
}

export default CardModal
