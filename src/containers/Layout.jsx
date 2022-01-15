import React from "react";
import '../styles/layout.scss'
import { Header } from '@containers/Header'

function Layout(props){
    return(
        <div>
           <Header/>
           {props.children}
        </div>
    );
}

export {Layout}