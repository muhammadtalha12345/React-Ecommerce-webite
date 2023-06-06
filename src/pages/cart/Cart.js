import React, { useContext } from "react";
import Shop from "../shop/Shop";
import { PRODUCTS } from "../../Products";
import Products from "../shop/Products";
import { ShopContext } from "../../context/Shop-Context";
import CartItem from "./CartItem";
import "./cart.css";
import {useHistory} from "react-router-dom";

function Cart(){
    const {addToCart, cartItems, getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const history=useHistory();
    return(
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cartItems">
            {PRODUCTS.map((product)=>{
                if(cartItems[product.id]!==0){
                    return <CartItem data={product} />;
                }
            })}
            </div>
            {totalAmount>0?
            <div className="checkout">
                <p>Subtotal: ${totalAmount}</p>
                <button 
                onClick={()=> history.push("/")}
                >Continue Shopping</button>
                <button>Check Out</button>
            </div>
            :<h1>Your Cart is Empty</h1>}
        </div>
    )

}
export default Cart;