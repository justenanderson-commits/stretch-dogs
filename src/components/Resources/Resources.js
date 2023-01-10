import './Resources.css'
import dogHome from '../../assets/images/dog-home.gif'
// import about from '../../assets/images/about.gif'

export default function About() {
  return (
    <div className="resources">
      <div className="resources__container">
        <h1>Bringing home a new pup?</h1>
        <img src={dogHome} alt="happy pup on the way home" />
        <p className="resources__text">
          Whether adopting a rescue or getting a new puppy, it's a big change for
          everyone! Here are a few helpful tips:
          <br />
          <br />
          <a
            className="link__text"
            href="https://thecottagemarket.com/how-to-help-adopted-dogs-adjust-and-relax-in-their-new-home/"
            target="_blank"
          >
            Helping Your New Pup Adjust
          </a>
          <br />
          <a
            className="link__text"
            href="https://www.aspcapetinsurance.com/resources/how-much-exercise-does-my-dog-need/"
            target="_blank"
          >
            Good Dogs Get Enough Exercise
          </a>
          <br />
          <a
            className="link__text"
            href="https://www.rescuedogs101.com/bringing-new-dog-home-3-3-3-rule/"
            target="_blank"
          >
            The 3-3-3 Rule of Adoption
          </a>
          <br />
          <a
            className="link__text"
            href="https://www.akc.org/dog-breeds/"
            target="_blank"
          >
            Full List of AKC Breeds
          </a>
        </p>
      </div>
    </div>
  )
}
