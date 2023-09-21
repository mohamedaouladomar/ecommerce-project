import React ,{useState} from 'react';
import Nav from './Nav';
import Rout from './Rout';
import {BrowserRouter} from 'react-router-dom';
import Footer from './Footer';
import Product from './Product';
import Productdetail from './Productdetail';

const App = () => {
// add cart
  const [cart,setCart] = useState([]);
  //product Detail
  const [detail, setDetail] = useState([])
  const [close , setClose] = useState(false);
  //filter product
  const [product , setProduct] = useState(Productdetail);
  const searchbtn = (product) =>{
    const change = Productdetail.filter((x) => 
    {
      return x.Cat === product
    })
    setProduct(change)
  }

  //product detail
  const view = (product) => 
  {
    setDetail([{...product}])
    setClose(true);
  }

  //add to cart
  

  const addtocart= (product) =>
  {
    const exsit = cart.find((x)=>
    {
      return x.id === product.id
    })
    if(exsit)
    {
      alert("This Product is already Added to cart !")
    }
    else{
      setCart([...cart, {...product, qty:1}])
      alert("Product is Added To Cart !")
    }
  }
  return (
    <>
    <BrowserRouter>
    <Nav searchbtn={searchbtn}/>
    <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart}/>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App