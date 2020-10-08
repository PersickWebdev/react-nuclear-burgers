import React, {useState} from "react";
import classNames from 'classnames';

const PizzaItem = ({name, imageUrl, types, sizes, price}) => {
    const [activeType, setActiveType] = useState(types[0]);
    const [activeSize, setActiveSize] = useState(sizes[0]);
    const availableTypes = ['тонкий', 'традиционный'];
    const availableSizes = [26, 30, 40];

    const selectActiveType = (index) => {
        setActiveType(index);
    }

    const selectActiveSize = (index) => {
        setActiveSize(index);
    }
    return (
        <div className='pizza'>
            <img
                src={imageUrl}
                alt="Pizza"
                className='pizza__image'
            />
            <h4 className='pizza__title'>{name}</h4>
            <div className="pizza__selector">
                <ul>
                    {availableTypes.map((type, index) => {
                        return (
                            <li key={type}
                                onClick={() => selectActiveType(index)}
                                className={classNames({
                                    active: activeType === index,
                                    disabled: !types.includes(index)
                                })}
                            >
                                {type}
                            </li>
                        )
                    })}
                </ul>
                <ul>
                    {availableSizes.map((size, index) => {
                        return (
                            <li key={size}
                                onClick={() => selectActiveSize(index)}
                                className={classNames({
                                    active: activeSize === index,
                                    disabled: !sizes.includes(size)
                                })}
                            >
                                {size} см.
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="pizza__bottom">
                <div className="pizza__price">
                    от {price} грн.
                </div>
                <div className="button button--buy">
                    <span className='pizza__buyText'>+</span>
                    <i className='pizza__buyQuantity'>2</i>
                </div>
            </div>
        </div>
    );
}

export default PizzaItem;