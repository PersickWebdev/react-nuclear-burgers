import React, {useEffect, useRef, useState} from "react";

const SortPopup = React.memo(({ activeSortType, items, onSortTypeClick }) => {
    const [isVisiblePopup, setIsVisiblePopup] = useState(false);
    const sortRef = useRef();
    const activeItemName = items.find(obj => obj.type === activeSortType).name;

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
    },[]);

    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(sortRef.current)) {
            setIsVisiblePopup(false);
        }
    }

    const toggleVisiblePopup = () => {
        setIsVisiblePopup(!isVisiblePopup);
    }

    const selectActiveItem = (index) => {
        onSortTypeClick(index);
        setIsVisiblePopup(false);
    }

    return (
        <div ref={sortRef} className="sort">
            <div className="sort__label">
                <b style={{color: "white"}}>Сортировка по:</b>
                <span onClick={toggleVisiblePopup}>{activeItemName}</span>
            </div>
            {isVisiblePopup &&
            <div className="sort__popup">
                <ul>
                    {items.map((obj, index) => {
                        return (
                            <li key={`${obj.type}_${index}`}
                                onClick={() => selectActiveItem(obj)}
                                className={activeSortType === obj.type ? 'active' : ''}>
                                {obj.name}
                            </li>
                        );
                    })
                    }

                </ul>
            </div>
            }
        </div>
    );
});

export default SortPopup;