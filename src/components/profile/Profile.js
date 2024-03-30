import React from 'react';
import profilec from '../images/profile.png';
import './profile.css'
import Footer from '../footer/Footer';

function Profile() {
  const profilename = localStorage.getItem('username-id');
  return (
    <div>
      <div className="main-body">
        <div className="top">
          <div className="left-image">
            {/* <img src={profilec} alt="Not found" /> */}

            <h5>{profilename}</h5>
          </div>
          {/* <div className="right-content">
            <span className="material-icons">edit</span>
            <p>Edit Profile</p>
          </div> */}
        </div>
        <div className="down-body">
          <div className="side-bodd">
            <div className="side-bar">
              <h3>A C T I V I T Y</h3>
              <ul>
                <li>Reviews</li>
                {/* <li>Photoes</li> */}
                <li>Order History</li>
                {/* <li>My Adress</li> */}
                {/* <li>Favourite Orders</li> */}
              </ul>
            </div>
            {/* <div className="side-bar">
              <h3>P A Y M E N T S</h3>
              <ul>
                <li>Lorem ip</li>
                <li>Lorem ip</li>
                <li>Lorem ip</li>
                <li>Lorem ip</li>
                <li>Lorem ip</li>
              </ul>
            </div> */}
          </div>
          <div className="side-info">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore beatae ipsam adipisci dolor tempora facilis omnis libero, corrupti similique, quia eos. Ullam non maiores dolores nisi quam vero asperiores unde?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;
