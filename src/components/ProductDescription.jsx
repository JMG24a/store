import React from 'react';
//styles
import '@styles/productDescription.scss';
import icon_close from '@icons/icon_close.png';
import icon_add from '@icons/bt_add_to_cart.svg';

function ProductDescription(){
    return(
        <React.Fragment>
            <aside class="product-detail">
                <div class="product-detail-close">
                    <img 
                        src={icon_close} 
                        alt="close"
                    />
                </div>
                <img 
                    src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                    alt="bike"
                />
                <div class="product-info">
                    <p>$35,00</p>
                    <p>Bike</p>
                    <p>
                        With its practical position, this bike also fulfills a decorative function, add your hall or workspace.
                    </p>

                    <button class="primary-button add-to-cart-button">
                        Add to cart  
                        <img 
                            src={icon_add} 
                            alt="add to cart"
                        />
                    </button>
                </div>
            </aside>
        </React.Fragment>
    );
}

export {ProductDescription}