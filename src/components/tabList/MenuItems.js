import React from 'react'

const MenuItems = ({items}) => {
    return(
        <>
        <div className="listArea">
                    <ul>
                        {
                            items.map((elem) => {
                                const {id, image, name, category, price, description } = elem

                                return(
                                    <li key={id}>
                                        <div className="dishbox">
                                            <div className="dishImg">
                                                <img src={image} alt="" />
                                            </div>
                                            <div className="dishDtl">
                                                <h3>{name}</h3>
                                                <p>{description}</p>
                                                <div className="dishPrice">Price {price}</div>
                                                <div className="dishorder">
                                                    <button className="orderNowBtn">Order Now</button>
                                                </div>
                                                <div className="priceInfo">
                                                    "Prices may vary on selected Date"
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                        
                    </ul>
                </div>
        </>
    )
}
export default MenuItems