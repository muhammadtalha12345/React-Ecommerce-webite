import React from "react";
import { PRODUCTS } from "../../Products";
import Products from "./Products";
import "./shop.css"
function Shop(){
    return(
        <div className="shop">
           <div className="shopTitle">
            <h1>Talha Shop</h1>
           </div>
           <div className="products">
            {PRODUCTS.map((product)=>(<Products data={product}/>))}
           </div>
        </div>
    )

}
export default Shop;