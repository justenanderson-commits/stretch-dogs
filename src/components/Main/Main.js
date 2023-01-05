import React, { Component } from 'react'
import Results from '../Results/Results'
import Questionnaire from '../Questionnaire/Questionnaire'
import { APP_ROUTES } from '../../utilis/constants'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Main.css'

class Main extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className='Main'>
        <h2></h2>
        <p>This app was created to help you find the perfect dog to give its forever home, take the quiz below and find the perfect kind of dog for you!</p>
        <img src='https://images.unsplash.com/photo-1601979031925-424e53b6caaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHVwcHl8ZW58MHx8MHx8&w=1000&q=80' alt='A cute puppy' className='puppy'></img>
        <Link to={APP_ROUTES.QUIZ} className='quiz-link'>Take the quiz now!</Link>
      </div>
    )
  }
}

export default Main
