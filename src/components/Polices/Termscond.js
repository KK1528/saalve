import React from 'react'
import { useEffect } from 'react';
import "./policies.css"
function Termscodn() {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, []);
    return (
        <div className='policies'>
        <h1>Welcome to Saalve. </h1> 
        <p> These terms and conditions govern your use of our website and services. By using our website, you agree to comply with these terms and conditions. If you do not agree with these terms and conditions, you may not use our website or services.</p>
        <br/>
        <h3> Introduction </h3>
        <p> Our E-Commerce Food Website is an online platform that offers food products and services to customers. By using our website, you agree to the following terms and conditions:</p>
        <br/>
        <h3> User Conduct</h3> 
        <p>You agree to use our website and services for lawful purposes only. You agree not to use our website to:
        Post or transmit any unlawful, threatening, abusive, defamatory, obscene, or otherwise objectionable content.
        Upload or transmit any content that contains viruses, worms, Trojan horses, or any other harmful or disruptive code.
        Use our website for commercial purposes without our prior written consent.
        Use any data mining, robots, or similar data gathering or extraction methods on our website. </p>
        <br/>
        <h3> Accounts and Passwords</h3> 
        <p>You must create an account to use our website and services. You are responsible for maintaining the confidentiality of your account and password. You agree to notify us immediately of any unauthorized use of your account or password.</p>
        <br/>
        <h3> Ordering and Payment</h3> 
        <p> When you place an order on our website, you agree to pay the full price of the products and services ordered, including any applicable taxes and fees. We accept payment by credit card, debit card, and PayPal.</p>
        <br/>
        <h3>Intellectual Property</h3> 
        <p>All content on our website, including text, graphics, logos, images, and software, is the property of our company or our licensors and is protected by copyright and other intellectual property laws.</p>
        <br/>
        <h3>Limitation of Liability</h3> 
        <p>Our liability to you for any damages arising from your use of our website or services is limited to the amount paid by you for the products or services in question.</p>
        <br/>
        <h3>Modification of Terms</h3> 
        <p>We reserve the right to modify these terms and conditions at any time. You should review these terms and conditions periodically for changes. By using our website after we have posted changes to these terms and conditions, you agree to the modified terms and conditions.</p>
        <br/>
        <h3>Governing Law and Jurisdiction</h3> 
        <p>These terms and conditions are governed by and construed in accordance with the laws of the state in which our company is located. Any disputes arising from your use of our website or services will be resolved in the courts of that state.</p>
        <br/>
        <h3>Entire Agreement</h3> 
        <p>These terms and conditions constitute the entire agreement between you and us regarding your use of our website and services. Any additional or conflicting terms and conditions proposed by you are expressly rejected.</p>
        <br/>
        <h3> Contact Information</h3>
        If you have any questions about these terms and conditions, please contact us at insert contact information.
        By using our E-Commerce Food Website, you agree to these terms and conditions. We reserve the right.
        <br/>
        </div>
    
  )
};

export default Termscodn;
