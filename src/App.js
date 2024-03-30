import React,{useState} from "react";
import NavBar from "./components/navbar/NavBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Meal from "./components/meal/Meal";
import Bakery from "./components/bakery/Bakery";
import Grocery from "./components/grocery/Grocery";
import Partner from "./components/partner/Partner";
import Favorite from "./components/favorite/Favorite";
import Cart from "./components/cart/Cart";
import MainBill from "./components/bill/MainBill";
// import MainBill from "./components/Bill/MainBill";
import Account from "./components/account/Account";
import FoodComp from "./components/foodcomp/FoodComp";
import Carousel from "./components/carousel/Carousel";
import LoggIn from "./components/login/loggin";
import SignInPage from "./components/login/signup";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile"
import Footer from "./components/footer/Footer";
import NewsLetter from "./components/newsletter/NewsLetter";
import Privacy from "./components/Polices/Privacy";
import About from "./components/Polices/About";
import Termscodn from "./components/Polices/Termscond";
// import SignInPage from './components/login/signup'

function App() {  

  const logginn = localStorage.getItem('Isloggedin-id');
  console.log(logginn);



  ////////////////////////////////////
  /////////////////////////////////////
  ///////////////////////////////////
  const generateOrderId = () => {
    const timestamp = Date.now().toString();
    return timestamp;
  };
  ////////////////////////////////////
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });
  const handleAddCartItem = ({  name, image, location, price }) => {
    const existingIndex = cartItems.findIndex((item) => item.name === name);
    if (existingIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingIndex].quantity += 1;
      setCartItems(updatedCartItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    } else {
      const updatedCartItems = [...cartItems,{  name, image, location, price, quantity: 1, orderId: generateOrderId()}];
      setCartItems([
        ...cartItems,
        {  name, image, location, price, quantity: 1,orderId: generateOrderId() },
      ]);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }
  };
  const handleDecreaseCartItem = (name) => {
    const existingIndex = cartItems.findIndex((item) => item.name === name);
    if (existingIndex !== -1) {
      const updatedCartItems = [...cartItems];
      if (updatedCartItems[existingIndex].quantity > 1) {
        updatedCartItems[existingIndex].quantity -= 1;
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      } else {
        const remainingItems = updatedCartItems.filter((item) => item.name !== name);
        setCartItems(remainingItems);
        localStorage.setItem('cartItems', JSON.stringify(remainingItems));
      }
    }
  };
  const handleDeleteCartItem = (name) => {
    const updatedCartItems = cartItems.filter((item) => item.name !== name);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };
  const handleDeleteAllCart = () =>{
    const updatedCartItems=[]
    setCartItems(updatedCartItems)
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  }
  return (
    <>
    <Router>  
        <NavBar cartSize={cartItems.length} loginVar={logginn} />
        {/* <SignInPage/> */}
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<SignInPage/>}/>
          <Route exact path="/signinpage" element={<LoggIn/>}/>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="meal" element={<Meal/>}>
            <Route exact path="food-component" element={<FoodComp/>}/>  
          </Route>
          <Route exact path="grocery" element={<Grocery/>}/>
          <Route exact path="bakery" element={<Bakery/>}/>
          <Route exact path="contactus" element={<NewsLetter/>}/>
          <Route exact path="favorite" element={<Favorite/>}/>
          <Route exact path="cart" element={(logginn)?<Cart cartItems={cartItems} handleAddCartItem={handleAddCartItem} handleDecreaseCartItem={handleDecreaseCartItem} handleDeleteCartItem={handleDeleteCartItem} handleDeleteAllCart={handleDeleteAllCart}/>:<SignInPage/>}/>
          <Route exact path="account" element={<Profile/>}/>
          <Route exact path="privacypolicy" element={<Privacy/>}/>
          <Route exact path="aboutus" element={<About/>}/>
          <Route exact path="termsandconditions" element={<Termscodn/>}/>
          <Route exact path="bill" element={<MainBill cartItems={cartItems}/>}/>
          <Route path="food-component/:type/:index" element={<FoodComp loginVar={logginn} handleAddCartItem={handleAddCartItem}/>}/>
          <Route path="/*" element={<Home/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
