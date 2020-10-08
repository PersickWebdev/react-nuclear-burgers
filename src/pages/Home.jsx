import React, {useCallback} from "react";
import {Categories, SortPopup, PizzaItem} from '../components';
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../redux/actionCreators/filters";

const categoryNames = ['Мясные','Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
const sortNames = [
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'alphabet' },
    { name: 'популярности', type: 'popular' }
];

const Home = () => {
    const dispatch = useDispatch();
    const items = useSelector(({ pizzas }) => pizzas.items);

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    return (
        <div className='home'>
            <div className='home__top'>
                <div className="container home__container">
                    <Categories items={categoryNames}
                                onCategoryClick={onSelectCategory}
                    />
                    <SortPopup items={sortNames}/>
                </div>
            </div>
            <h2 className="content__title">
                <div className="container">
                    All Items
                </div>
            </h2>
            <div className="content__items">
                <div className="container home__container--pizzaItems">
                    {items &&
                        items.map(pizza => <PizzaItem key={pizza.id} {...pizza}/>)
                    }
                </div>

            </div>
        </div>
    );
}

export default Home;