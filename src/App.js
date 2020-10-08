import React, {useEffect} from 'react';
import { Route } from 'react-router-dom';
import {useDispatch} from "react-redux";
import axios from 'axios';

import { Header } from "./components";
import { Home } from './pages';
import { Cart } from './pages';

import {setPizzas} from "./redux/actionCreators/pizzas";

const App = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('http://localhost:3001/pizzas')
            .then((response) => {
                dispatch(setPizzas(response.data));
            })
    }, []);

    return (
        <div className='app__container'>
            <Header/>
            <div className='app__content'>
                <Route path='/'     component={ Home } exact/>
                <Route path='/cart' component={ Cart }exact/>
            </div>
        </div>
    );
}

export default App;
