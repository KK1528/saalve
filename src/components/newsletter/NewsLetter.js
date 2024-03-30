import React from 'react';
import { useEffect,useState } from 'react';
import './newsletter.css';

function NewsLetter() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
const[text,setText]=useState("");
  
  return (
    <>
    <div>
      <div id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
            <h4>Contact Us</h4>
            <p>Send Your valuable feedback directly to our <span>E-Mail</span></p>
        </div>
        <div className="form">
            <input type="text" placeholder="Enter Text Here" onChange={(e)=>{setText(e.target.value);console.log(text)}}/>
            <a className="normal" href={"mailto:info@saalve.in?subject=Feedback&body="+text} target="_newtab">Submit</a>
        </div>

    </div>
    </div>
    </>
  )
}

export default NewsLetter;