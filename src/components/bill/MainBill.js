import React from 'react'
import Bill from './Bill';
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';
import './bill.css';


function MainBill({cartItems}) {

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

    function createBill(datas){
        return(
            <div style={{display:"grid",justifyItems:"center" }}>
                <Bill name={datas.name} image={datas.image} price={datas.price} quantity={datas.quantity} orderId={datas.orderId} address={datas.location}/>
                <hr style={{background:"#4DA943" ,width:"80vw",height:"1.5px", marginTop:"6rem" ,marginBottom:"3rem" , borderRadius:"10px"}}/>
             </div>
            );
      }
  return (
    <>
    <div style={{display:"grid",gap:"1rem",margin:"2rem"}} ref={componentRef}>
      {cartItems.map(createBill)}
    </div>
    <div className="downloadall">
      <button classname="downloadall" onClick={handlePrint}>DownloadAll</button>
      </div>
    </>
  )
}

export default MainBill
