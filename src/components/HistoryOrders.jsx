//dependencias
import React from 'react';
//Styles
import '@styles/historyOrders.scss';
import icon_flechita from '@icons/flechita.svg'

function HistoryOrders(){
    return(
        <React.Fragment>
            <div class="my-order">
                <div class="my-order-container">
                    <h1 class="title">My orders</h1>

                    <div class="my-order-content">
                        <div class="order">
                            <p>
                                <span>03.25.21</span>
                                <span>6 articles</span>
                            </p>
                            <p>$560.00</p>
                            <img 
                                src={icon_flechita}
                                alt="arrow"
                            />
                        </div>

                        <div class="order">
                            <p>
                                <span>03.25.21</span>
                                <span>6 articles</span>
                            </p>
                            <p>$560.00</p>
                            <img 
                                src={icon_flechita}
                                alt="arrow"
                            />
                        </div>

                        <div class="order">
                            <p>
                                <span>03.25.21</span>
                                <span>6 articles</span>
                            </p>
                            <p>$560.00</p>
                            <img 
                                src={icon_flechita}
                                alt="arrow"
                            />
                        </div>

                        <div class="order">
                            <p>
                                <span>03.25.21</span>
                                <span>6 articles</span>
                            </p>
                            <p>$560.00</p>
                            <img 
                                src={icon_flechita} 
                                alt="arrow"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export {HistoryOrders}