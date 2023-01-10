import './Resources.css'
import dogHome from '../../assets/images/dog-home.gif'
// import about from '../../assets/images/about.gif'

export default function About() {
  return (
    <div className='resources'>
      <div className='resources__container'>
        <h1>Bringing home a new pup?</h1>
        <img src={ dogHome } alt='happy pup on the way home' />
        <p className='resources__text'>
          Whether adopting or getting a new puppy, it's a big change for everyone! Here are a few helpful tips:
          <br/>
          <br/>
          <a className='link__text' href="https://thecottagemarket.com/how-to-help-adopted-dogs-adjust-and-relax-in-their-new-home/" target="_blank">Helping Your New Pup Adjust</a>
         
        </p>
       
      </div>
    </div>
  )
}
