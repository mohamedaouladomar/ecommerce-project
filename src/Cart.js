import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './cart.css';
const Cart = ({cart,setCart}) => {
    const incqty =(product) => 
    {
        const exsit =cart.find((x)=>{
            return x.id === product.id
        })
        setCart(cart.map((curElm)=>
        {
            return curElm.id ===product.id ?{...exsit , qty:exsit.qty +1}: curElm
        }))
    }

    // ......................
    const decqty =(product) => 
    {
        const exsit =cart.find((x)=>{
            return x.id === product.id
        })
        setCart(cart.map((curElm)=>
        {
            return curElm.id ===product.id ?{...exsit , qty:exsit.qty -1}: curElm
        }))
    }

    // ................................

    const removeproduct = (product) => {
        const exsit =cart.find((x)=>{
            return x.id === product.id
        })
        if(exsit.qty > 0){
            setCart(cart.filter((x)=> {
                return x.id !== product.id
            }))
        }
    }

    // ................................

    const Totalprice = cart.reduce((price,item)=>price + item.qty * item.Price, 0 ) 
  return (
    <>
    <div className='div1'>
        {cart.length===0 &&
        <div className='div2'>
         <h2 className='h2'>Cart is Empty</h2> 
         <Link to='/product' className='link1'>Shop Now</Link>
         </div>
         }
        <div className='div3'>
            {
                cart.map((curElm)=>
                {
                    return (
                        <div className='div4' key={curElm.id}>
                            <div className='div5'>
                                <img src={curElm.Img} alt={curElm.Title}/>
                            </div>
                            <div className='div6'>
                                <h4>{curElm.Cat}</h4>
                                <h3>{curElm.Title}</h3>
                                <p>Pice :{curElm.Price} $</p>
                                <div className='div7'>
                                    <button className='but1' onClick={()=>incqty(curElm)}>+</button>
                                   <input type='text' className='inp1' value={curElm.qty} />
                                   <button className='but2' onClick={()=>decqty(curElm)}>-</button>
                                </div>
                                <h4>sub Total: {curElm.Price * curElm.qty} $</h4>
                                <button onClick={()=>removeproduct(curElm)} className='but3'><AiOutlineClose/></button>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
        {
            cart.length > 0 &&
            <>
            <h2 className='totalprice'>{Totalprice}$</h2>
            <button className='checkout'>Checkout</button>
            </>
        }
        
    </div>
    </>
  )
}

export default Cart