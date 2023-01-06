import React from 'react'
import './Results.css'
import Card from '../Card/Card'

const Result = ({ quizResults, reset }) => {
  console.log(quizResults)
  let topDogs

  if (JSON.stringify(quizResults) !== '{}') {
    topDogs = quizResults.map((dog, index) => {
      return <Card key={`breed ${index}`} breed={dog.breed} img={dog.img} />
    })
  }

  return (
    <div className='results-container'>
      <h2>Top Breeds For You</h2>
      <div className='results-card-container'>
        {topDogs ? topDogs : <p>'Just get a cat'</p>}
      </div>
      <button className='home-button' onClick={() => reset()}>
        Back To Home
      </button>
    </div>
  )
}

export default Result
