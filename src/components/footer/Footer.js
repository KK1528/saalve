import React from 'react';
import logo from '../images/logo1.png';
import app from '../images/app.jpg';
import play from '../images/play.jpg';
import pay from '../images/pay.png';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
        <footer>
        <div className="col">
            <img  className="logo" src={logo }alt="" />
            <h4>Contact</h4>
            <p><strong>Address: </strong>382/204, Saidulajab, Near Panchayat Ghar, New Delhi-30</p>
            <p><strong>Working Hours: </strong>10:00 A.M. - 8 P.M.</p>
            <div className="follow">
                <h4>Follow Us</h4>
                <div className="icon">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-pinterest-p"></i>
                    <i className="fab fa-youtube"></i>
                </div>
            </div>
        </div>
        <div className="col">
            <h4>About Us</h4>
            <Link to="/aboutus">About Us</Link>
            {/* <a href="#">Delievery Information</a> */}
            <Link to="/privacypolicy">Privacy Policy</Link>
            <Link to="/termsandconditions">Terms & Condition</Link>
            <Link to="/contactus">Contact US</Link>
        </div>
        <div className="col">
            <h4>My Account</h4>
            <Link to="/account">Sign In</Link>
            <Link to="/cart">View Cart</Link>
            {/* <a href="#">My Wishlist</a> */}
            {/* <a href="#">Track my Order</a> */}
            {/* <a href="#">Help</a> */}
        </div>
        {/* <div className="col install">
            <h4>Install APP</h4>
            <p>From App store & Google Play</p>
            <div className="row">
                <img src={app} alt=""/>
                <img src={play} alt=""/>
            </div>
            <p>Secured payment Gateways</p>
            <img src={pay} alt=""/>
        </div> */}
        <div className="copyright">
            <p>~2023, Tech2 etc - Under Indian Government Policy 241-C</p>
        </div>
        </footer>
    </>
  )
}

export default Footer;
