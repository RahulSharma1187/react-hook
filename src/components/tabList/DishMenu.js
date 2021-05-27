import React from 'react'

const DishMenu = ({filterItem, menuList}) => {
    return (
        <>
            <div className="dishMenu">
                    <ul>
                        {
                            menuList.map((crntElm, ind) => {
                                return (
                                    <li key={ind}>
                                        <button type="button" onClick={() => filterItem(crntElm)}>{crntElm}</button>
                                    </li>     
                                )
                            })   
                        }
                        {/* <li>
                            <button type="button" onClick={() => filterItem('breakfast')}>Breakfast</button>
                        </li>
                        <li>
                            <button type="button" onClick={() => filterItem('lunch')}>lunch</button>
                        </li>
                        <li>
                            <button type="button" onClick={() => filterItem('evening')}>Evening</button>
                        </li>
                        <li>
                            <button type="button" onClick={() => filterItem('dinner')}>Dinner</button>
                        </li>
                        <li>
                            <button type="button" onClick={() => setItems(Menu)}>All</button>
                        </li> */}
                    </ul>
                </div>
        </>
    )
}

export default DishMenu;
