import React from 'react';
import { Link } from "react-router-dom";

import { Button } from '../index';

import logo from '../../assets/images/logo.png';
import cart from '../../assets/images/cart.png';


const Header = (props) => {
    return (
        <div className='header'>
            <div className="container header__container">
                <Link className='header__content' to='/'>
                    <div className="header__logo">
                        <img className='header__logoImg' src={logo} alt="logo"/>
                    </div>
                    <div className="header__name">
                        <span>Nuclear Pizza</span>
                    </div>
                </Link>
                <div className="header__cart">
                    <Link to='/cart'>
                        <Button className='button--cart'>
                            {/*<span className='button--cart_totalPrice'>320rad</span>*/}
                            <img className='button--cartIcon' src={cart} alt='cart-icon'/>
                            {/*<span className='button--cart_totalItems'>5</span>*/}
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;