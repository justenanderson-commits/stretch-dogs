import React, { Component } from 'react'
import Results from '../Results/Results'
import Questionnaire from '../Questionnaire/Questionnaire'
import { APP_ROUTES } from '../../utilis/constants'
import { Route } from 'react-router-dom'

class Main extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className='Main'>
        <h2>Main Component</h2>
      </div>
    )
  }
}

export default Main
