import React from 'react'
import { useEffect } from 'react';
import "./policies.css"
function Privacy() {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, []);
  return (
    <div className='policies'>
      <h1>Privacy Policy</h1><br/>
      <p><a href='saalve.in'>Saalve.in</a> respects your privacy and is committed to protecting your personal information. This privacy policy outlines how we collect, use, and disclose your personal information when you use our website.</p>
    <br/>
    <h2>Information we collect</h2>
    <br/>
    <p>We collect the following types of personal information when you use our website:</p>
    <ul>
        <li>Your name and email address when you sign up for our newsletter or create an account on our website</li>
        <li>Your location data when you use our website to search for local restaurants or order food for delivery</li>
        <li>Your order history and payment information when you make a purchase on our website</li>
        <li>Information about your device and how you use our website, including your IP address and browser type</li>
    </ul>
    <br/>
    <h2>How we use your information</h2>
    <p>We use your personal information to:</p>
    <ul>
        <li>Provide and improve our services, including customizing your experience and providing customer support</li>
        <li>Process your orders and payments</li>
        <li>Send you marketing communications, such as newsletters and promotions, that we think may interest you</li>
        <li>Comply with legal requirements and protect our legal rights</li>
    </ul>
    <br/>
    <h2>Information sharing</h2>
    <p>We may share your personal information with:</p>
    <ul>
        <li>Our partners and service providers who help us operate our business and provide services to you</li>
        <li>Law enforcement agencies or other third parties in response to a legal request or investigation</li>
    </ul>
    <br/>
    <h2>Security</h2>
    <p>We take reasonable measures to protect your personal information from unauthorized access, disclosure, and use. However, no method of transmission over the internet or electronic storage is completely secure.</p>
    <br/>
    <h2>Changes to this policy</h2>
    <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
    <br/>
    <h2>Contact us</h2>
    <p>If you have any questions or concerns about this privacy policy, please contact us at <a href="mailto:info@saalve.in" target="_newtab" >info@saalve.in</a> .</p>
    <br />
    </div>
  )
}

export default Privacy
