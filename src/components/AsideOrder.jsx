import React from "react";
//styles
import '@styles/asideOrder.scss';
import icon_close from '@icons/icon_close.png';
import icon_flechita from '@icons/flechita.svg';

function AsideOrder(){
    return(
        <React.Fragment>
            <aside class="product-detail">
                <div class="title-container">
                    <img 
                        src={icon_flechita}
                        alt="arrow"
                    />
                    <p class="title">My order</p>
                </div>

                <div class="my-order-content">
                    <div class="shopping-cart">
                        <figure>
                            <img 
                                src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                                alt="bike"
                            />
                        </figure>
                        <p>Bike</p>
                        <p>$30,00</p>
                        <img 
                            src={icon_close} 
                            alt="close"
                        />
                    </div>

                    <div class="shopping-cart">
                        <figure>
                            <img 
                                src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                                alt="bike"
                            />
                        </figure>
                        <p>Bike</p>
                        <p>$30,00</p>
                        <img 
                            src={icon_close}
                            alt="close"
                        />
                    </div>

                    <div class="order">
                        <p>
                            <span>Total</span>
                        </p>
                        <p>$560.00</p>
                    </div>

                    <button class="primary-button">
                        Checkout
                    </button>
                </div>
            </aside>
        </React.Fragment>
    );
}

export {AsideOrder}