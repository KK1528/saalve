import React,{useRef} from 'react'
import "./home.css"
import ic1 from "../images/ic1.jpg"
import ic2 from "../images/ic2.jpg"
import ic3 from "../images/ic3.png"
import kanha from "../images/kanha.png"
import mcd from "../images/mcd.png"
import bs from "../images/bs.png"
import behroz from "../images/behroz.jpg"
import { Link } from 'react-router-dom'
import About from '../Polices/About'


function Home() {
    const pro=useRef("null");
    const prev = () =>{
        let width = pro.current.offsetWidth;
        pro.current.scrollLeft -=width;
    }
    function next() {
        let width = pro.current.offsetWidth;
        pro.current.scrollLeft +=width;        
    }
    return (
        <>
        <div className='home-caraousel'>
            <div className="home-container" ref={pro}>
                <div className="home-element">
                    <img src={ic3} alt="rice" />
                    <div className="grad1"></div>
                    <p className="para1">Let’s Save Food</p>  
                </div>
                <div className="home-element">
                    <img src={ic2} alt="paneer" />
                    <div className="grad1"></div>
                    <p className="para2"> Cutting global food waste by just a quarter will save enough food for everyone on planet.</p>
                </div>
                <div className="home-element">
                    <img src={ic1} alt="dosa" />
                    <div className="grad1"></div>
                    <p className="para3">Let us together reduce the amount of food waste generated.</p>
                </div>
                
            </div>
            <button className='pre-home-btn' onClick={prev}><span className="material-icons">navigate_before</span></button>
            <button className='next-home-btn'onClick={next}><span className="material-icons">navigate_next</span></button>
        </div>
        {/* <div className="logos">
            <img src={kanha} alt="kanha" />
            <img src={bs} alt="bs" />
            <img src={mcd} alt="McD" />
            <img src={behroz} alt="behroz" /> */}
        {/* </div> */}
        {/* <Link to='/meal' className='home-link'>Explore More</Link> */}
        <About/>

        </>
    )
}

export default Home;
