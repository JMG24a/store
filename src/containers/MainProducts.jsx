import React from 'react';
//styles
import '@styles/product.scss';


function MainProducts({children}){

    return(
        <React.Fragment>
            <section className="main-container">
                <div className="cards-container">
                    {children}
                </div>
            </section>
        </React.Fragment>
    );
}

export {MainProducts}