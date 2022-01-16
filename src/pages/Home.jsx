import React from "react";
import { AppContext } from "../context/AppContext";
import { Layout } from '@containers/Layout';
import { Product } from '@components/Product';


function Home(){
    
    const {
        state,
    } = React.useContext(AppContext);

    return(
        <React.Fragment>
            <Layout>
                <Product/> 
                <p>{state}</p>
            </Layout>
        </React.Fragment>
    );
}

export {Home}