import React from 'react'
import MicroModal from 'react-micro-modal'
import './Card.css'

const Card = ({ breed, img }) => {
  return (
    <div className='results-card'>
      <img className='dog-portrait' src={img} alt={breed} />
      <div className='results-text'>
        <p className='name-text'>{breed}</p>
      </div>
      <MicroModal
        trigger={(open) => (
          <button className='dog-button' onClick={open}>
            Click For More
          </button>
        )}
      >
        {(close) => (
          <div className='modal'>
            <h2>{breed}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className='close-modal-button' onClick={close}>
              Close!
            </button>
          </div>
        )}
      </MicroModal>
    </div>
  )
}

export default Card
