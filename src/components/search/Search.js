import React from 'react'
import "./search.css"
function Search() {
  return (
    <div className='search'>
        <div className='search-heading'> 
          <select name="location" style={{width:"120px"}}>
            <option value="" disabled selected hidden>Jaipur</option>
            <option value="">Delhi</option>
            <option value="">Mumbai</option>
          </select>
          <input type="text" name='write' placeholder="Search by restaurant or store" style={{width:"300px"}}/>
          <select name="filter" style={{width:"120px"}}> 
            <option value="" disabled selected>Filter</option>
            <option value="">Veg</option>
            <option value="">Thali</option>
            <option value="">Sweets</option>
          </select>
          <button>Search</button>
        </div>
        <div>
          <label><input type="checkbox" style={{marginRight:"5px"}} />Pure Veg</label>
          <label><input type="checkbox" style={{marginRight:"5px"}}/>Pure Vegan</label>
          <label><input type="checkbox" style={{marginRight:"5px"}}/>Now Open</label>
        </div>
      </div>
  )
}

export default Search
