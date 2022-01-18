import React from "react";
import icon_add from '@icons/bt_add_to_cart.svg';

function Item({addProductCart, product}){
    return(
        <div className="product-card"> 
            <img 
                //src=""
                alt=""
            />
            <div className="product-info">
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                
                <figure>
                    <img 
                        onClick={()=>addProductCart(product)}
                        src={icon_add}
                        alt="add"
                    />
                </figure>
            </div>
        </div>
    );
}

export {Item}