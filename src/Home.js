import React from 'react'
import {Link} from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { FiTruck } from 'react-icons/fi';
import { BsCurrencyDollar } from 'react-icons/bs';
import { CiPercent } from 'react-icons/ci';
import { BiHeadphone } from 'react-icons/bi';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart ,AiOutlineCloseCircle } from 'react-icons/ai';
import './home.css'
import Homeproduct from './Homeproduct';
const Home = ({detail,view,close,setClose,addtocart}) => {
  return (
    <>
     {
        close ?
        <div className='product_detail'>

        <div className='container'>
            <button onClick={()=>setClose(false)} className='closebtn'><AiOutlineCloseCircle/></button>
            {
                detail.map((curElm)=>{
                    return (
                        <div className='productbox'>
                            <div className='img-box'>
                                <img src={curElm.Img} alt={curElm.Title} />
                            </div>
                            <div className='detail'>
                                <h4>{curElm.Cat}</h4>
                                <h2>{curElm.Title}</h2>
                                <p>A Screen Everyone Will Love: Whether your family is streaming or video chatting with friends tablet A8... </p>
                                <h3>{curElm.Price}</h3>
                                <button>Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
           
        </div>
    </div> : null
    }
    <div className='top_banner'>
        <div className='container'>
            <div className='detail'>
                <h2>The best Note Book Collection 2024 !</h2>
                <Link to='/product' className='link'> Show Now <BsArrowRight/></Link>
            </div>
            <div className='img_box'>
                <img src='./img/slider1.png' alt='sliderimg' />
            </div>
        </div>
    </div>

    <div className='product_type'>
        <div className='container'>
            <div className='box'>
                <div className='img_box'>
                    <img src='./img/mobile1.png' alt='mobile' />
                </div>

                <div className='detail'>
                    <p>23 products</p>
                </div>
            </div>
{/* --------------------------------------- */}
            <div className='box'>
                <div className='img_box'>
                    <img src='./img/smartwatch.png' alt='watch' />
                </div>

                <div className='detail'>
                    <p>63    products</p>
                </div>
            </div>
{/* ----------------------------------- */}
            <div className='box'>
                <div className='img_box'>
                    <img src='./img/headphone.png' alt='headphone' />
                </div>

                <div className='detail'>
                    <p>52 products</p>
                </div>
            </div>
{/* ---------------------- */}
            <div className='box'>
                <div className='img_box'>
                    <img src='./img/cpuheat.png' alt='cpu' />
                </div>

                <div className='detail'>
                    <p>62 products</p>
                </div>
            </div>
        </div>
    </div>

    <div className='about'>
        <div className='container'>
            <div className='box'>
                <div className='icon'>
                <FiTruck/>
                </div>
                <div className='detail'>
                    <h3>Free Shipping</h3>
                    <p>Orer above $1000</p>
                </div>
            </div>
{/* ----------------------------------------- */}
            <div className='box'>
                <div className='icon'>
                <BsCurrencyDollar/>
                </div>
                <div className='detail'>
                    <h3>Return & Refund </h3>
                    <p>Money Back Guaranty</p>
                </div>
            </div>
{/* ----------------------------------------- */}

            <div className='box'>
                <div className='icon'>
                <CiPercent/>
                </div>
                <div className='detail'>
                    <h3>Member Discount</h3>
                    <p>On every Order</p>
                </div>
            </div>
{/* ----------------------------------------- */}

            <div className='box'>
                <div className='icon'>
                <BiHeadphone/>
                </div>
                <div className='detail'>
                    <h3>Customer Support</h3>
                    <p>Every Time Call Support</p>
                </div>
            </div>
        </div>
    </div>

        <div className='product'>
            <h2>Top Products</h2>
            <div className='container'>
                {
                    Homeproduct.map((curElm)=>{
                        return(
                            <div className='box' key={curElm.id}>
                                <div className='img_box'>
                                    <img src={curElm.Img} alt={curElm.Title} />
                                    <div className='icon'>
                                        <li onClick={()=>addtocart(curElm)}><AiOutlineShoppingCart /></li>
                                        <li onClick={()=>view(curElm)}><BsEye/></li>
                                        <li><AiOutlineHeart/></li>
                                        
                                        
                                        
                                        </div>
                                    </div>
                                    <div className='detail'>
                                        <p>{curElm.Cat}</p>
                                        <h3>{curElm.Title}</h3>
                                        <h4>{curElm.Price}</h4>
                                        </div>
                            </div>
                        )
                    })
                }
        </div>
    </div>
    <div className='banner'>
        <div className='container'>
        <div className='detail'>
            <h4>LATEST TECHNOLOGY ADDED</h4>
            <h3>Tablet ZonKo Pro 2023 512Gb -Black</h3>
            <p>$1500</p>
            <Link to='/product' className='link'>Shop Now   <BsArrowRight/></Link>
        </div>
        <div className='img_box'>
            <img src='./img/slider1.png' alt='slider1' />
        </div>
        </div>
    </div>
    </>
  )
}

export default Home