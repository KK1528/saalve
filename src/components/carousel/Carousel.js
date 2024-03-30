import React,{useRef} from 'react'
import MyCard from '../mycard/MyCard'
import './carousel.css'
import thali_datas from '../../Thali_data.js';
import grocery_datas from '../../Grocery_data.js';
import bakery_datas from '../../Bakery_data.js';


export default function Carousel(props) {
    function createcard(datas){
        return(
            <MyCard type={props.type} i={datas.index} restaurant={datas.name} img = {datas.img} tag = {datas.tag} star = {datas.star} time = {datas.time} dis = {datas.dis} date = {datas.date} money = {datas.money} money_cut={datas.money_cut}/>
        );
    }
    const pro=useRef("null");
    const prev = () =>{
        let width = pro.current.offsetWidth;
        pro.current.scrollLeft -=0.7*width;
    }
    function next() {
        let width = pro.current.offsetWidth;
        pro.current.scrollLeft +=0.7*width;        
    }

  return (
    <div className='food-carousel'>
        <button className='pre-food-btn' onClick={prev}><span className="material-icons">navigate_before</span></button>
        <div className="product-container" ref={pro}>
        {(props.type==="Grocery")?grocery_datas.map(createcard):(props.type==="Bakery")?bakery_datas.map(createcard):thali_datas.map(createcard)}
        </div>
        <button className='next-food-btn'onClick={next}><span className="material-icons">navigate_next</span></button>

    </div>
  )
}
