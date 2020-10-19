import React from "react";
import { CartItem } from "../components";
import {useDispatch, useSelector} from "react-redux";
import {clearCart} from "../redux/actionCreators/cart";

const Cart = () => {
    const dispatch = useDispatch();
    const { items, totalPrice, totalCount } = useSelector(({ cart }) => cart);

    const addedPizzas = Object.keys(items).map(key => {
        return items[key].items[0];
    });

    const onClearCart = () => {
        if (window.confirm('Действительно очистить корзину?')) {
            dispatch(clearCart());
        }
    }

    return (
        <div className="container container--cart">
            <div className="cart">
                <div className="cart__top">
                    <h2 className="content__title">
                        Корзина
                    </h2>
                    <div className="cart__clear">
                        <span onClick={onClearCart}>Очистить корзину</span>
                    </div>
                </div>
                <div className="content__items">
                    {addedPizzas.map(obj => (
                        <CartItem name={obj.name}
                                  type={obj.type}
                                  size={obj.size}
                                  totalPrice={items[obj.id].totalPrice}
                                  totalCount={items[obj.id].items.length}
                        />
                    ))}
                </div>
                <div className="cart__bottom">
                    <div className="cart__bottom-details">
                        <span> Всего пицц: <b style={{color: "#ffb200"}}>{totalCount} шт.</b> </span>
                        <span> Сумма заказа: <b>{totalPrice} ₽</b> </span>
                    </div>
                    <div className="cart__bottom-buttons">
                        <a href="/" className="button button--outline button--add go-back-btn">
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                            <span>Вернуться назад</span>
                        </a>
                        <div className="button pay-btn">
                            <span>Оплатить сейчас</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;