import './About.css'
import about from '../../assets/images/about.gif'

export default function About() {
  return (
    <div className='about'>
      <div className='about__container'>
        <h1>About this app</h1>
        <img src={about} alt='happy human with their cute dog' />
        <p className='about__text'>
          At Pawfect Match, our mission is to help
          people find a dog compatible with their lifestyle, so their pup can have a forever home. Sadly, only an estimated 10% of dogs born today will find a permanent home. Around 3.9 million dogs are abandoned or given up to shelters each year, and about 30% of dogs of them are purebreds. Check out our <a href="./quiz">breed finder quiz</a> to learn if one is right for you!
        </p>
      </div>
    </div>
  )
}
