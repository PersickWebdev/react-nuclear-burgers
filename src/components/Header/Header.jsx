import React from "react";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

import { Button } from "../index";

import logo from "../../assets/images/logo.png";

const Header = () => {
    const { totalPrice, totalCount } = useSelector(({ cart }) => cart);
    return (
        <div className="header">
            <div className="container">
                <Link to='/'>
                    <div className="header__logo">
                        <img src={logo} alt="Pizza logo"/>
                        <div>
                            <h1>React Pizza</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </div>
                </Link>
                <div className="header__cart">
                    <Link to='/cart'>
                        <Button className='button--cart'>
                            <span>{totalPrice} ₽</span>
                            <div className="button__delimiter"></div>
                            <span>{totalCount}</span>
                        </Button>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default Header;