import {useState, useEffect} from "react";
import "./Questionnaire.css";

export default function Questionnaire() {
  const [value,onChange]=useState(3);
  useEffect(()=>{
      const element = document.querySelector('.buble');
    if (element) {
      element.style.left = `${Number(value / 4)}px`;
    }
  })
  
  return (
    <div className="slider-parent">
      <p className="search-instructions">Move each slider to find breeds that will best fit your lifestyle.</p>
      <label>Size</label>
      <input name="size-slider" id="size-slider" type="range" min="1" max="5" value={value}
         onChange={({ target: { value: radius } }) => {
                    onChange(radius);
                  }}
      />
      <label>Family Friendliness</label>
      <input type="range" min="1" max="5" value={value}
         onChange={({ target: { value: radius } }) => {
                    onChange(radius);
                  }}
      />
      <label>Trainability</label>
      <input type="range" min="1" max="5" value={value}
         onChange={({ target: { value: radius } }) => {
                    onChange(radius);
                  }}
      />
      <label>Grooming Needed</label>
      <input type="range" min="1" max="5" value={value}
         onChange={({ target: { value: radius } }) => {
                    onChange(radius);
                  }}
      />
      <label>Energy Level</label>
      <input type="range" min="1" max="5" value={value}
         onChange={({ target: { value: radius } }) => {
                    onChange(radius);
                  }}
      />
      <button>Search</button>
      <div className="buble"> 
      {value}
      </div>
    </div>
  );
}










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