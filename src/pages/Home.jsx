import React, {useCallback, useEffect } from "react";
import { Categories, SortPopup, PizzaItem } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setSortBy } from "../redux/actionCreators/filters";
import { fetchPizzas } from "../redux/actionCreators/pizzas";
import { addPizzaToCart } from "../redux/actionCreators/cart";

// to save the link, 'categoryNames' and 'sortItems' is created outside the 'Home'.
const categoryNames = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
    {name: 'популярности', type:'popular', order: 'desc'},
    {name:'цене', type: 'price', order: 'desc'},
    {name: 'алфавиту', type: 'name', order: 'asc'}
];

const Home = () => {
    const dispatch = useDispatch();
    const items = useSelector(({pizzas}) => pizzas.items);
    const cartItems = useSelector(({cart}) => cart.items);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const {category, sortBy} = useSelector(({filters}) => filters);

    useEffect(() => {
        dispatch(fetchPizzas(category, sortBy));
    }, [category, sortBy]);

    // useCallback - allows not to change a link to 'onSelectCategory', so there will be no extra rerender.
    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    const onSelectSortType = useCallback((type) => {
        dispatch(setSortBy(type));
    }, []);

    const handleAddPizzaToCart = (obj) => {
        dispatch(addPizzaToCart(obj))
    }
    return (
        <div className="container">
            <div className="content__top">
                <Categories items={categoryNames}
                            activeCategory={category}
                            onCategoryClick={onSelectCategory}
                />
                <SortPopup activeSortType={sortBy.type}
                           items={sortItems}
                           onSortTypeClick={onSelectSortType}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoaded
                        ? items.map(pizza => <PizzaItem onAddPizzaClick={handleAddPizzaToCart}
                                                        key={pizza.id}
                                                        {...pizza}
                                                        addedCount={cartItems[pizza.id] && cartItems[pizza.id].length}/>)
                        : <p>Loading ...</p>
                }
            </div>
        </div>
    );
}

export default Home;