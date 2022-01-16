//dependencias
import React from 'react';
//componentes
import { MenuHeader } from '@components/MenuHeader';
import { MenuMovile } from '@components/MenuMovile'
//Styles
import icon_menuMovil from '@icons/icon_menu.svg'; 
import logo_favicon from '@logos/favicon_yard_sale.svg';
import car from '@icons/icon_shopping_cart.svg'
import '../styles/header.scss'


function Header(){

    const [isMenu,setIsMenu] = React.useState(false);

    return(
        <header>
            <nav>
                <img 
                    src={icon_menuMovil} 
                    alt="menu" 
                    className="menu"
                    onClick={()=>{setIsMenu(!isMenu)}}
                />
                {!!isMenu && <MenuMovile/>}

                <div className="navbar-left">
                    <img src={logo_favicon} alt="logo" className="logo"/>

                    <ul>
                        <li>
                            <a href="/">All</a>
                        </li>
                        <li>
                            <a href="/">Clothes</a>
                        </li>
                        <li>
                            <a href="/">Electronics</a>
                        </li>
                        <li>
                            <a href="/">Furnitures</a>
                        </li>
                        <li>
                            <a href="/">Toys</a>
                        </li>
                        <li>
                            <a href="/">Others</a>
                        </li>
                    </ul>
                </div>

                <div className="navbar-right">
                    <ul>
                        <li className="navbar-email">platzi@example.com</li>
                        <li className="navbar-shopping-cart">
                            <img src={car} alt="shopping cart"/>
                            <div>2</div>
                        </li>
                    </ul>
                </div>
                <MenuHeader/>
            </nav>
        </header>
    );
}

export {Header}