import React, { useState } from 'react';
import Menu from './Menu'
import MenuItems from './MenuItems';
import DishMenu from './DishMenu'



const TabList = () => {
    
    const menuList = [...new Set(Menu.map((crntElmt) => { return  crntElmt.category  })), 'all'];
    const [items , setItems] = useState(Menu);
    
    const filterItem = (ctgItem) => {
        if(ctgItem === "all"){
            setItems(Menu);
            return;
        }
        const updatedItem = Menu.filter((crntElem) => {
            return crntElem.category === ctgItem;
        });
        setItems(updatedItem);
    }

    return(
        <>  
            <h6>List</h6>
            <div className="mainDishBox">
                <h2>Order Your Favourite Dish</h2>
                <DishMenu filterItem ={filterItem} menuList = {menuList} />
                <MenuItems items = {items} />
            </div>
            
        </>
    )
}

export default TabList