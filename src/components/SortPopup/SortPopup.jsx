import React, {useEffect, useRef, useState} from "react";

const SortPopup = React.memo(({ items }) => {
    const [isVisiblePopup, setIsVisiblePopup] = useState(false);
    const [activeItem, setActiveItem] = useState(0);
    const sortRef = useRef();
    const activeItemName = items[activeItem].name;

    useEffect(() => {
        document.addEventListener('click', handleOutSideClick)
    }, []);

    const toggleIsVisiblePopup = () => {
        setIsVisiblePopup(!isVisiblePopup);
    }

    const handleOutSideClick = (event) => {
        if (!event.path.includes(sortRef.current)) {
            setIsVisiblePopup(false);
        }
    }

    const selectActiveItem = (index) => {
        setActiveItem(index);
    }

    return (
        <div ref={sortRef} className='sort'>
            <div className="sort__label">
                <span>Сортировать по: </span>
                <span onClick={toggleIsVisiblePopup} className='sort__text'>{activeItemName}</span>
            </div>
            {isVisiblePopup &&
            <div className="sort__popup">
                <ul>
                    {items.map((obj, index) => {
                        return (
                            <li key={`${obj.type}_${index}`}
                                onClick={() => selectActiveItem(index)}
                                className={activeItem === index ? 'active' : ''}
                            >
                                {obj.name}
                            </li>
                        );
                    })}
                </ul>
            </div>
            }

        </div>
    );
})

export default SortPopup;