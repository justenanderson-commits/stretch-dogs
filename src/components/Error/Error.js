import React from 'react'
import './Error.css'

const Error = () => {
  const resetQuiz = () => {
    window.location = '/quiz'
  }

  return (
    <div className='main'>
      <p className='error-msg'>
        Oops! Something went wrong, it was probably our fault!
      </p>
      <button className='reset-btn' onClick={() => resetQuiz()}>
        Reset quiz
      </button>
    </div>
  )
}

export default Error
