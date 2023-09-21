import React from 'react'
import { RiFacebookFill } from 'react-icons/ri';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoYoutube } from 'react-icons/bi';

import'./footer.css';
const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='aboutt'>
                <div className='logo'>
                    <img src='./img/logo3.png' alt='logo3' />
                </div>
                <div className='detail'>
                    <p>We Are A team of Developers With Create high quality of Develope Web</p>
                    <div className='icon'>
                        <li><RiFacebookFill/></li>
                        <li><AiOutlineInstagram/></li>
                        <li><AiOutlineTwitter/></li>
                        <li><BiLogoYoutube/></li>
                        

                    </div>
                </div>
            </div>

            <div className='account'>
                <h3>My Account</h3>
                <ul>
                    <li>Acoount</li>
                    <li>Order</li>
                    <li>Cart</li>
                    <li>Shipping</li>
                    <li>Return</li>
                </ul>
            </div>
            <div className='page'>
                <h3>Pages</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Terme And Conditions</li>

                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer