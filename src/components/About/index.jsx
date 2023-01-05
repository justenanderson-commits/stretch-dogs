import './About.css'
import about from '../../assets/images/about.gif'

export default function About() {
  return (
    <div className='about'>
      <div className='about__container'>
        <h1>About this app</h1>
        <img src={about} alt='happy human with their cute dog' />
        <p className='about__text'>
          This will be where we put the purpose of this app, which is to help
          people find a dog compatible with their lifestyles in order to be a forever
          home for the pet that they adopt. We need some statistics about animals being
          re-sheltered.
        </p>
      </div>
    </div>
  )
}
