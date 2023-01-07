import React from 'react'
import Interface from '../assets/Slideshow/Implant_Interface.jpeg'
import Implants from '../assets/Slideshow/Implants.jpeg'
import CoffeeRip from '../assets/Slideshow/Rip_with_coffee.jpg'
import Rippers from '../assets/Slideshow/Ripperdocs.webp'


// Slideshow
// let slideindex = 0;
// showslides(slideindex);

// function showslides() {
//     setTimeout(showslides, 400 * 10);
//     let i;
//     let slide = document.getElementsByClassName("slide");
//     let dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slide.length; i++) {
//         slide[i].style.display = "none";
//     }
//     slideindex++;
//     if (slideindex > slide.length) {
//         slideindex = 1
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className.replace("active");
//     }
//     slide[slideindex - 1].style.display = "block";
//     dots[slideindex - 1].className += " active";
   
// }



export default function Home() {
  return (
      <div>
          {/* <!-- Slideshow container --> */}
    <div className="slideshow-container">
      <div className="slide fade">
        <img src={Rippers} alt="ripperdocs in a line" />
      </div>

      <div className="slide fade">
        <img src={Interface} alt="ripperdoc menu" />
      </div>

      <div className="slide fade">
        <img
          src={CoffeeRip}
          alt="man enjoying coffee on operation chair"
        />
      </div>


      <div className="slide fade">
        <img src={Implants} alt="cybernetic hand enhancement" />
      </div>
    </div>
    <br />

     {/* slideshow dots */}
    <div className="dot-div">
      <span className="dot" onclick="currentSlide(1)"></span>
      <span className="dot" onclick="currentSlide(2)"></span>
      <span className="dot" onclick="currentSlide(3)"></span>
      <span className="dot" onclick="currentSlide(4)"></span>
    </div>
    </div>
  )
}


