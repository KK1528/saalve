import React from 'react'
import MyCard from '../mycard/MyCard'
import "./favorite.css"
import Search from '../search/Search'

export default function Favorite() {
  return (
    <>
    <Search/>
    <div className='favs'>
      <h3>My Favorites</h3>
      <div className="fav-cards">
        <div className='fav-card'>
          <MyCard cardno="1"/>
          <span class="material-icons delete-fav">clear</span>
        </div>
        <div className='fav-card'>
          <MyCard cardno="1"/>
          <span class="material-icons delete-fav">clear</span>
        </div>
        <div className='fav-card'>
          <MyCard cardno="1"/>
          <span class="material-icons delete-fav">clear</span>
        </div>
        <div className='fav-card'>
          <MyCard cardno="1"/>
          <span class="material-icons delete-fav">clear</span>
        </div>
        <div className='fav-card'>
          <MyCard cardno="1"/>
          <span class="material-icons delete-fav">clear</span>
        </div>   
      </div>
    </div>
    </>
  )
}
