// import {useState, useEffect} from "react";
import "./Questionnaire.css"

const Questionnaire = () => {
  return ( 
    <div className="all-sliders-container">
      <h5 className="search-instructions">Move each slider to find breeds that will best fit your lifestyle.</h5>
      <div className="slider-container">
        <label htmlFor="size">Size</label>
        <input type="range" id="size" name="size"
         min="1" max="5" defaultValue="3" />
         <div className="slider-labels">
          <p>Tiny</p>
          <p>Large</p>
         </div>
      </div>

      <div className="slider-container">
        <label htmlFor="family-rating">Family Friendly</label>
        <input type="range" id="family-rating" name="family-rating"
         min="1" max="5" defaultValue="3" />
         <div className="slider-labels">
          <p>Not so much</p>
          <p>Super friendly</p>
         </div>
      </div>


    </div>
   );
}
 
export default Questionnaire;

// export default function Questionnaire() {
//   const [value,onChange]=useState(3);
//   useEffect(()=>{
//       const element = document.querySelector('.buble');
//     if (element) {
//       element.style.left = `${Number(value / 4)}px`;
//     }
//   }
//   )
  
//   return (
//     <div className="slider-parent">
//       <p className="search-instructions">Move each slider to find breeds that will best fit your lifestyle.</p>
//       <label>Size</label>
//       <input name="size-slider" id="size-slider" type="range" min="1" max="5" value={value}
//          onChange={({ target: { value: radius } }) => {
//                     onChange(radius);
//                   }}
//       />
//       <label>Family Friendliness</label>
//       <input type="range" min="1" max="5" value={value}
//          onChange={({ target: { value: radius } }) => {
//                     onChange(radius);
//                   }}
//       />
//       <label>Trainability</label>
//       <input type="range" min="1" max="5" value={value}
//          onChange={({ target: { value: radius } }) => {
//                     onChange(radius);
//                   }}
//       />
//       <label>Grooming Needed</label>
//       <input type="range" min="1" max="5" value={value}
//          onChange={({ target: { value: radius } }) => {
//                     onChange(radius);
//                   }}
//       />
//       <label>Energy Level</label>
//       <input type="range" min="1" max="5" value={value}
//          onChange={({ target: { value: radius } }) => {
//                     onChange(radius);
//                   }}
//       />
//       <button>Search</button>
//       <div className="buble"> 
//       {value}
//       </div>
//     </div>
//   );
// }

// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//   output.innerHTML = this.value;
// }

// const Questionnaire = () => {

//   output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//   output.innerHTML = this.value;
// }


//   return ( 
//     <div className="questionnaire">
//       <div className="slidecontainer">
//         <input type="range" min="1" max="5" value="2.5" className="slider" id="myRange" />

        
//       </div>
//     </div>
//    );
// }
 
// export default Questionnaire