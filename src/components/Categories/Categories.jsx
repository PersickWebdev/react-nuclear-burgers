import React, {useState} from "react";
import PropTypes from 'prop-types';

// Use 'React.memo' not to extra rerender the component.
// 'React.memo' makes surface comparison of props.
// It checks if a link to props items has been changed or not.
const Categories = React.memo(({ activeCategory, items, onCategoryClick }) => {

    return (
        <div className="categories">
            <ul>
                <li onClick={(event) => onCategoryClick(null)}
                    className={activeCategory === null ? 'active' : ''}>Все</li>
                { items &&
                items.map((item, index) => {
                    return (
                        <li key={`${item}_${index}`}
                            onClick={() => onCategoryClick(index)}
                            className={activeCategory === index ? 'active' : ''}>
                            {item}
                        </li>
                    )
                })
                }
            </ul>
        </div>
    )
})

Categories.propTypes = {
    activeCategory: PropTypes.oneOf([PropTypes.number, null]),
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onCategoryClick: PropTypes.func
}

Categories.defaultProps = {
    activeCategory: null,
    items: []
}

export default Categories;