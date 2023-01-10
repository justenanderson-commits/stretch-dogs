import './Resources.css'
// import about from '../../assets/images/about.gif'

export default function About() {
  return (
    <div className='resources'>
      <div className='resources__container'>
        <h1>Getting a new pup?</h1>
        <img src={resources} alt='happy human with their cute dog' />
        <p className='resources__text'>
          Whether adopting or getting a new puppy, it's a big change for everyone! 
        </p>
      </div>
    </div>
  )
}
