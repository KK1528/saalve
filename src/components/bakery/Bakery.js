import React from 'react'
import Carousel from '../carousel/Carousel'
import Search from '../search/Search'
import MyCard from '../mycard/MyCard'
import bakery_datas from '../../Bakery_data.js';

export default function Meal() {
  function createcard(datas){
    return(
        <MyCard restaurant={datas.name} img = {datas.img} tag = {datas.tag} star = {datas.star} time = {datas.time} dis = {datas.dis} date = {datas.date} money = {datas.money} money_cut={datas.money_cut}/>
    );
}


  return (
    <>
      <Search/>
      <h2 className='meal-heading'>Surprise Thali in Jaipur</h2>
      <div className="meal">
        <div className='meal-grid'>
        {bakery_datas.map(createcard)}
        </div>
      </div>
      <h2 className='meal-heading'>Recommended Surprise Thalis</h2>
      <Carousel type="Thali"/>
      <h2 className='meal-heading'>Recommended Surprise Grocery Bags</h2>
      <Carousel type="Grocery"/>
    </>
  )
}
