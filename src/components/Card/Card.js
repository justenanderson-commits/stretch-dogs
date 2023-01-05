import React from 'react'
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
        <p className="match-percentage-text">80% Match</p>
        <p className="name-text">Golden Retriever</p>
      </div>
      <button className="dog-button">Click For More</button>
    </div>
  )
}

export default Card