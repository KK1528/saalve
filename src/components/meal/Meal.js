import React from 'react'
import { useEffect } from 'react'
import Carousel from '../carousel/Carousel'
import Search from '../search/Search'
import MyCard from '../mycard/MyCard'
import './meal.css'
import thali_datas from '../../Thali_data.js';
import {Link, Outlet } from 'react-router-dom'

export default function Meal() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  function createcard(datas){
    return(
        <MyCard type="thali" i={datas.index} restaurant={datas.name} img = {datas.img} tag = {datas.tag} star = {datas.star} time = {datas.time} dis = {datas.dis} date = {datas.date} money = {datas.money} money_cut={datas.money_cut}/>
    );
}


  return (
    <>
      {/* <Search/> */}
      <h2 className='meal-heading'>Surprise Thali</h2>
      <div className="meal">
        <div className='meal-grid'>
        {thali_datas.map(createcard)}
        </div>
      </div>
      <h2 className='meal-heading'>Recommended Surprise Grocery Bags</h2>
      <Carousel type="Grocery"/>
      {/* <h2 className='meal-heading'>Recommended Surprise Bakery Bags</h2>
      <Carousel type="Bakery"/> */}
    </>
  )
}
