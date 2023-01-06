import { APP_ROUTES } from '../../utilis/constants'
import { Link } from 'react-router-dom'
import './Main.css'
import dog from '../../assets/images/dog-sitting.gif'

function Main() {
  return (
    <div className='Main'>
      <h1 className='title'>WELCOME TO DOG</h1>
      <h3 className='brief-about'>
        This app was created to help you find the perfect dog to give its
        forever home, take the quiz below and find the perfect kind of dog for
        you!
      </h3>
      <img src={dog} className='puppy'></img>
      <Link to={APP_ROUTES.QUIZ} className='quiz-link'>
        Take the quiz now!
      </Link>
    </div>
  )
}

export default Main
