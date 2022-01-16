import React from 'react';
//styles
import '@styles/product.scss';
import icon_add from '@icons/bt_add_to_cart.svg';

function Product(){
    return(
        <React.Fragment>
            <section class="main-container">
                <div class="cards-container">
                    <div class="product-card">
                        <img 
                            src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                            alt=""
                        />
                        <div class="product-info">
                            <div>
                                <p>$120,00</p>
                                <p>Bike</p>
                            </div>
                            
                            <figure>
                                <img 
                                    src={icon_add}
                                    alt=""
                                />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export {Product}