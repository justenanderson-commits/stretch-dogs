import "./Questionnaire.css"

const Questionnaire = () => {
  return ( 
    <div className="all-sliders-container">
      <h4 className="search-instructions">Move each slider to find breeds that will best fit your lifestyle.</h4>
      <div className="slider-container">
        <label htmlFor="size">Size</label>
        <input className="slider" type="range" id="size" name="size"
         min="1" max="5" defaultValue="3" />
         <div className="slider-labels">
          <p>Tiny</p>
          <p>Large</p>
         </div>
      </div>

      <div className="slider-container">
        <label htmlFor="family-rating">Family Friendly</label>
        <input className="slider" type="range" id="family-rating" name="family-rating"
         min="1" max="5" defaultValue="3" />
         <div className="slider-labels">
          <p>Not so much</p>
          <p>Super friendly</p>
         </div>
      </div>

      <div className="slider-container">
        <label htmlFor="trainability">Trainability</label>
        <input className="slider" type="range" id="trainability" name="trainability"
         min="1" max="5" defaultValue="3" />
         <div className="slider-labels">
          <p>Independent thinker</p>
          <p>Strong will to please</p>
         </div>
      </div>

      <div className="slider-container">
        <label htmlFor="grooming-needed">Grooming Needed</label>
        <input className="slider" type="range" id="grooming-needed" name="grooming-needed"
         min="1" max="5" defaultValue="3" />
         <div className="slider-labels">
          <p>Hairless</p>
          <p>Near-daily brushing</p>
         </div>
      </div>

      <div className="slider-container">
        <label htmlFor="energy-level">Energy Level</label>
        <input className="slider" type="range" id="energy-level" name="energy-level"
         min="1" max="5" defaultValue="3" />
         <div className="slider-labels">
          <p>Couch potato</p>
          <p>Lots of daily exercise</p>
         </div>
      </div>
      
      <button>Search</button>

    </div>
   );
}
 
export default Questionnaire;