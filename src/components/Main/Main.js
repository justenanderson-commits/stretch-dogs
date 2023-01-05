import React, {Component} from 'react'
import Results from '../Results/Results'
import Questionnaire from '../Questionnaire/Questionnaire'

class Main extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div className="Main">
        <h2>Main Component</h2>
        <Results />
        <Questionnaire />
      </div>
    )
  }
}

export default Main