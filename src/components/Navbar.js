import React from "react";
import { Link } from 'react-router-dom';
import "./navbar.css"
import Shop from "../pages/shop/Shop";
import Cart from "../pages/cart/Cart";
function Navbar(){
    return(
        <div className="navbar">
            <div className="links">
                <Link to="/" element={<Shop/>}>Shop</Link>
                <Link to="/cart" element={<Cart/>}>Cart</Link>
            </div>
            
        </div>
    )
}
export default Navbar;