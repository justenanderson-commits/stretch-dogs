import React, { Component } from 'react'
import './Results.css'
import Card from '../Card/Card'

class Result extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topDogs: null,
    }
  }

  componentDidMount() {
    if (JSON.stringify(this.props.quizResults) !== '{}') {
      this.state.topDogs = this.props.quizResults.map((dog, index) => {
        return <Card key={`breed ${index}`} breed={dog.breed} img={dog.img} />
      })
    }
  }

  reset = () => {
    window.location = '/'
  }

  render() {
    return (
      <div className='results-container'>
        <h2>Top Breeds For You</h2>
        <div className='results-card-container'>
          {this.state.topDogs?.length > 0 ? (
            this.state.topDogs
          ) : (
            <p>Hmm, maybe you're better off getting a cat?</p>
          )}
        </div>
        <button className='home-button' onClick={() => this.reset()}>
          Back To Home
        </button>
      </div>
    )
  }
}

export default Result
