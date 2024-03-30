import React, { useState } from 'react'
import './mycard.css'
import { Link } from 'react-router-dom'

export default function MyCard(props) {
  const[like,setLike] = useState(false)
  const[fav,setFav] = useState("favorite_border")
  function handleLike(){
    if(!like)
      setFav("favorite");
    else
      setFav("favorite_border");
    setLike(!like);
  }
  return (
    <div className='mycard'>
      <Link to = {{ pathname: "/food-component/"+props.type+"/"+props.i }}><img src={props.img} alt="no" /></Link>
      <div className="card-top">
        <div className="card-top1">
            <h4>{props.restaurant}</h4>
            {/* <div  className={fav} ><span onClick={handleLike} className="material-icons">{fav}</span></div> */}
        </div>
        <div className="card-top2">
            <div style={{paddingTop:"6px"}}>{props.tag}</div>
            <div className="star"><span className='span0'>{props.star}</span><span className='material-icons'>star</span></div>
        </div>
        <div className="card-top3">
            <div className="pickup"><span className='material-icons'>schedule</span><span className='span1'>{props.time}</span></div>
            <div className="star"><span className='distance span0'>{props.dis}</span><span className='material-icons'>directions_car</span></div>
        </div>
        <div className="card-top4">
          <div className="pickup"><span className='material-icons'>event_available</span><span className='span1'>{props.date}</span></div>
          <div className="star"><span className='span0'>&#x20B9; {props.money}<del style={{marginLeft:"4px"}}>&#x20B9;{props.money_cut}</del></span><span className='material-icons'>payments</span></div>
        </div> 
      </div>
    </div>
    )
}
