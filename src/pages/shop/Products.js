import React, { useContext } from "react";
import { ShopContext } from "../../context/Shop-Context";

function Products(prop){
    const {id, productName, price, productImage}=prop.data;
    const {addToCart, cartItems}=useContext(ShopContext);
    const cardItemsAmount = cartItems[id];
    
    return(
    <div className="product">
        <img src={productImage}/>
        <div className="description">
        <p><b>{productName}</b></p>
        <p>${price}</p>
        <button className="addToCartBttn" onClick={()=>addToCart(id)}>
            Add to cart 
        {cardItemsAmount > 0 && <>({cardItemsAmount})</>}
        </button>
        </div>
    </div>
)
}
export default Products