import React, {useState} from "react";

const Categories = React.memo(({ items, onCategoryClick }) => {
    const [activeCategory, setActiveCategory] = useState(null);

    const selectActiveCategory = (index) => {
        setActiveCategory(index);
        onCategoryClick(index);
    }

    return (
        <div className='categories'>
            <ul className='categories__list'>
                <li className={activeCategory === null ? `categories__item categories__item--active` : 'categories__item'}
                    onClick={() => {
                        setActiveCategory(null);
                        onCategoryClick(null);
                    }}>
                    Все
                </li>
                {items &&
                    items.map((item, index) => {
                        return (
                            <li key={`${item}_${++index}`}
                                className={activeCategory === index ? `categories__item categories__item--active` : 'categories__item'}
                                onClick={() => selectActiveCategory(index)}>
                                {item}
                            </li>
                    );
                })}
            </ul>
        </div>
    );
})

export default Categories;