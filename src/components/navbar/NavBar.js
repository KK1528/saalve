import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './navbar.css';


function NavBar(props) {
  const [active, setActive] = useState({ meal: false, grocery: false, bakery: false, partner: false });
  const [toggle, setToggle] = useState(true);
  // const [notifications, setNotifications] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions here
    localStorage.removeItem('Isloggedin-id');
    navigate('/');
    window.location.reload();
  };

  return (
    <nav className="nav">
      <ul className="nav-list">
        <li><a href="/" className="nav-logo">SAALVE</a></li>
        <li className="nav-toggle">
          <button
            onClick={() => setToggle(!toggle)}>
            <span className="material-icons">{toggle ? "menu" : "close"}</span>
          </button></li>
        <div className={toggle ? "nav-menu visible" : "nav-menu"}>
          <li className="buttons">
            <Link to='/meal'
              onClick={() => { setActive(prev => { return { meal: true, grocery: false, bakery: false, partner: false } }); setToggle(!toggle) }}
              className={active.meal ? "active" : ""}>Meal</Link>
          </li>
          <li className="buttons">
            <Link to='/grocery'
              onClick={() => { setActive(prev => { return { meal: false, grocery: true, bakery: false, partner: false } }); setToggle(!toggle) }}
              className={active.grocery ? "active" : ""}>Grocery</Link>
          </li>
          {/* <li className="buttons">
                <Link to='/bakery'
                  onClick={() => {setActive(prev => {return {meal: false, grocery: false, bakery: true, partner: false}});setToggle(!toggle)}} 
                  className={active.bakery? "active": "" }>Bakery</Link>
              </li> */}
          <li className="buttons">
            <Link to='/contactus'
              onClick={() => { setActive(prev => { return { meal: false, grocery: false, bakery: false, partner: true } }); setToggle(!toggle) }}
              className={active.partner ? "active" : ""}>Contact us</Link>
          </li>
          <li className="buttons">
            <Link to='/account' onClick={() => { setActive(prev => { return { meal: false, grocery: false, bakery: false, partner: false } }); setToggle(!toggle) }}>Account</Link>
          </li>
        </div>
        <div className="nav-icons">
          {/* <li className="nav-icon">
                <Link to='/favorite' onClick={() => {setActive(prev => {return {meal: false, grocery: false, bakery: false, partner: false}})}}><span className="material-icons">favorite</span></Link>
              </li> */}
          {/* <li className="nav-icon">
                <span className="material-icons" onClick={() => setNotifications(!notifications)}>notifications</span>
                <div className='counter'>2</div>
                <div className={notifications?"nav-notifications":"invisible"}>
                  <ul className='nav-notification-list'>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, nesciunt.</li><hr/>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, nesciunt.</li><hr/>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, nesciunt.</li><hr/>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, nesciunt.</li><hr/>
                  </ul>
                </div>
              </li> */}

          {(props.loginVar) ?
            <>
              <li className="nav-icon">
                <Link to='/cart' onClick={() => { setActive(prev => { return { meal: false, grocery: false, bakery: false, partner: false } }) }}>
                  <span className="material-icons">shopping_cart</span>
                </Link>
                <div className='counter'>{props.cartSize}</div>
              </li>
              <li className="nav-icon invi_small">
                <Link to='/account' onClick={() => { setActive(prev => { return { meal: false, grocery: false, bakery: false, partner: false } }) }}>
                  <span className="material-icons">face</span>
                </Link>
                <button style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  outline: 'none',
                  padding: '0',
                }} onClick={handleLogout}><span className="material-icons">logout</span></button>
              </li>
            </> :
            <div className='signin' style={{ marginTop: "1.1rem" }}>
              <Link to="/signinpage">Sign-up</Link>
              <Link to="/login">Log-in</Link>
            </div>
          }
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;