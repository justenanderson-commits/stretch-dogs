import React from 'react'
import MicroModal from "react-micro-modal";
import './Card.css'

const Card = () => {
  return (
    <div className="results-card">
      <img
        className="dog-portrait"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Golden_Retriever_2019.jpg/800px-Golden_Retriever_2019.jpg?20210119120616"
        alt="golden retriever pupper"
      />
      <div className="results-text">
        <p className="name-text">Golden Retriever</p>
      </div>
      <MicroModal trigger={(open) => 
        <button className="dog-button" onClick={open}>Click For More</button>}>
      {(close) => 
      <button onClick={close}>Close!</button>}
      </MicroModal>
    </div>
  )
}

export default Card