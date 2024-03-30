import React from "react";
import "./about.css"
import { useEffect } from "react";
import img1 from './images/img3.png'
import img2 from './images/img2.png';
import img3 from './images/img1.png'
export const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="aboutus">
    <div id="About" className="about">
      <h1>About Us</h1>
      <hr/>
      <div className='body'>
        <img src={img1} alt="noting" className='photo'/>
        <p className='text'>Every day, delicious fresh food goes to waste at restaurants, cafes, hotels, supermarkets, shops, and manufacturers just because it hasn’t sold in time. Our mission is to let customers buy fresh food, that would otherwise be wasted, at a discounted price.</p>
      </div>
    </div>
    <div id="Problem" className="problem">
      <h1>Problem</h1>
      <hr/>
      <div className="box">
            <div className="box1">
                
                <p className="para"><span className="main">The economic loss of food waste costs India <b>$12 Billion.</b></span>
                <br/><br/>If we all stop wasting edible food, it would be the equivalent of taking one in four cars off the road. Think about the kind of impact we want to leave before leaving this planet. A small change in habit of saving food can save our future generations, environment, and our money.</p>
            </div>

            <div className="badi">
                <img className="ind" src={img2} alt="alt"/>
            </div>
        </div>
    </div>
    <div id="Solution" className="solution">
      <h1>Solution</h1>
      <hr/>
      <div className='body'>
            <img src={img3} alt="nothin" className="photo"/>
            <p className="text">Are you a business with surplus food? Join us to cut your food waste - all while finding new customers and saving sunk costs. We want India to think differently about throwing food.</p>
        </div>
    </div>
    </div>
  );
};

export default About;
