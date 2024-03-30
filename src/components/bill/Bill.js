import React from 'react';
import { useEffect,useRef } from 'react';
// import thali_datas from '../../Thali_data.js';
// import grocery_datas from '../../Grocery_data.js';
import './bill.css';
// import { useParams } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';

function Bill(props) {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });
      //////////////////////////////////
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, []);
    const date=new Date();
    let currentDate=`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;
    ///////////////////////////
    // const {type,index} = useParams();
    // const price=(type==="thali")?thali_datas[index].money:grocery_datas[index].money;
    const quantity=props.quantity;
    const price=props.price;
    const totalPrice=price*quantity;
    const tax=Math.round(0.05*totalPrice*100)/100;
  return (
    <>
    <div className="full-bill" ref={componentRef}>
        <div className="left-bill">
            <div className="left-top">
                <h3>SAALVE, Thank you for ordering!</h3>
            </div>
            <div className="item-pic">
                <img src={props.image} alt="Not found" />
            </div>
            <div className="item-info">
            <p>You can collect your order from the restaurant.</p>
            <p>Thanks,<br /><b>Saalve</b> </p>
            </div>
            <div className="update">
                <p>Don't want updates? <span>Subscribe</span></p>
            </div>
        </div>
        <div className="right-bill">
            <div className="right-top">
                <h3>Thank you for choosing us :)) </h3>
            </div>
            <div className="thanks-note">
                <p>We Promise to make you food deliciousand healthy.</p>
            </div>
            <div className="order-stats">
                <p><span>Order-ID: </span> {props.orderId}</p>
                <p><span>Status: </span> To be paid</p>
                <p><span>Date: </span> {currentDate}</p>
                {/* <p><span>Date: </span> {currentDate}</p> */}
                <p>Collect your order from <span>{props.address} </span></p>
            </div>
            <div className="item">
                <div className="ty1">
                <img src={props.image} alt="Not found" />
                <h6>{props.name}</h6>
                </div>
                <div className="ty">
                    <p>&#x20B9; {price}</p>
                </div>
                
            </div>
            <div className="order-details">
                <div className="order-into">
                    <p>Price</p>
                    <p>&#x20B9; {price}</p>
                </div>
                <div className="order-into">
                    <p>Quantity</p>
                    <p>{quantity}</p>
                </div>
                <div className="order-into">
                    <p>Subtotal</p>
                    <p>&#x20B9; {totalPrice}</p>
                </div>
                <div className="order-into">
                    <p>Tax(5%)</p>
                    <p>&#x20B9; {tax}</p>
                </div>
                <div className="order-into">
                    <p> <b> Total</b></p>
                    <p><b>&#x20B9; {totalPrice+tax}</b></p>
                </div>
            </div>
            <div className="order-address">

            </div>
            <div className="help">
                <p>If you need any help, don't hesitate to send us your feedback at <a href="mailto:info@saalve.in" target="_newtab" style={{ color:"var(--main-color)"}}>info@saalve.in</a>. </p>
            </div>
            <div className="download">
                <button onClick={handlePrint}>Download</button>
            </div>
        </div>
    </div>

    </>
  )
}

export default Bill;
