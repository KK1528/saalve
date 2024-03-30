import React from 'react';
import { useState,useEffect } from 'react';
import './foodcomp.css';
import Search from '../search/Search';
import Carousel from '../carousel/Carousel';
import { useParams } from 'react-router-dom';
import thali_datas from '../../Thali_data.js';
import grocery_datas from '../../Grocery_data.js';
import { Link } from 'react-router-dom';


function FoodComp({handleAddCartItem,loginVar}) {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, []);


    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const handleShowAlert = (message) => {
        setAlertMessage(message);
        setShowAlert(true);

        setTimeout(() => {
        setShowAlert(false);
        }, 5000);
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    useEffect(() => {
        let timer;
        if (showAlert) {
        timer = setTimeout(() => {
            setShowAlert(false);
        }, 3000);
        }
        return () => {
        clearTimeout(timer);
        };
    }, [showAlert]);

    ///////////////////////////////////
    const {type,index} = useParams();
    ///////////////////////////////////
    const[like,setLike] = useState(false);
    const[fav,setFav] = useState("favorite_border")
    function handleLike(){
    if(!like)
      setFav("favorite");
    else
      setFav("favorite_border");
    setLike(!like);
  }
    return (
        <>
            {showAlert && (
            <div className="alert">
                <p>{alertMessage}</p>
                <span className="close-btn" onClick={handleCloseAlert}>&times;</span>
            </div>
            )}
            {/* <Search/> */}
            
            <div className="food-page">
                    <div className="leftsec">
                        <div className="top-section">
                            <h2>{(type==="thali")?thali_datas[index].name:grocery_datas[index].name}</h2>
                            {/* <div  className={fav} ><span onClick={handleLike} className="material-icons">{fav}</span></div> */}
                        </div>
                        <div className="stars top-section-headings">
                            {(type==="thali")?thali_datas[index].tag:grocery_datas[index].tag}
                            <div className="star"><span className='span0'>{(type==="thali")?thali_datas[index].star:grocery_datas[index].star}</span><span className='material-icons'>star</span></div>
                        </div>
                        <div className="distances top-section-headings">
                            {(type==="thali")?thali_datas[index].location:grocery_datas[index].location}
                            <div className="star"><span className='distance span0'>{(type==="thali")?thali_datas[index].dis:grocery_datas[index].dis}</span><span className='material-icons'>directions_car</span></div>
                        </div>
                        <span style={{color:"orange" ,fontSize:"0.8rem"}}> Closes in {(type==="thali")?thali_datas[index].closes:grocery_datas[index].closes} mins</span>
                        <hr style={{marginTop: "10px", marginBottom: "10px" }}/>
                        <div className="top-section">
                            <h3>Surprise Thali</h3>
                            <div className="star"><span className='span0'>&#x20B9; {(type==="thali")?thali_datas[index].money:grocery_datas[index].money}<del style={{marginLeft:"4px"}}>&#x20B9;{(type==="thali")?thali_datas[index].money_cut:grocery_datas[index].money_cut}</del></span><span className='material-icons'>payments</span></div>
                        </div> 
                        <div className="pickup-time">
                            <div className="pickup"><span className='material-icons'>schedule</span><span className='span1'>{(type==="thali")?thali_datas[index].time:grocery_datas[index].time}</span></div>
                            <div className="pickup"><span className='material-icons'>event_available</span><span className='span1'>{(type==="thali")?thali_datas[index].date:grocery_datas[index].date}</span></div>
                            {/* <div  className={fav} ><span onClick={handleLike} className="material-icons">{fav}</span></div> */}
                        </div>  
                        <div className="order">

                            {loginVar?
                                <button onClick={() => {handleAddCartItem({product:"thali",name:(type==="thali")?thali_datas[index].name:grocery_datas[index].name,image:(type==="thali")?thali_datas[index].img:grocery_datas[index].img,dis:(type==="thali")?thali_datas[index].dis:grocery_datas[index].dis, price:(type==="thali")?thali_datas[index].money:grocery_datas[index].money, location:(type==="thali")?thali_datas[index].location:grocery_datas[index].location});
                            handleShowAlert("Item added to cart!");
                            }}> Add to Cart</button>:<Link className="addtocart" to="/signinpage">Add to Cart</Link>}
                            {/* <Link className='button' to={{ pathname: "/your-bill/"+type+"/"+index }}> Order Now</Link> */}
                        </div>
                        <hr style={{marginTop: "10px", marginBottom: "10px" }}/>                        
                    </div>
                    <div className="rightsec">
                        <img src={(type==="thali")?thali_datas[index].img:grocery_datas[index].img} alt="Not found"/>
                    </div>
            </div>
            <h2 className='meal-heading'>Recommended Surprise {type==="thali"? "Grocery Bags":"Thalis"} </h2>
            <Carousel type={type==="thali"? "Grocery":"thali"}/>
            {/* <h2 className='meal-heading'>Recommended Surprise Bakery Bags</h2>
            <Carousel/> */}
        </>
    )
}

export default FoodComp;