import React from 'react';
import '@styles/menuHeader.scss'

function MenuHeader(){
    return(
        <React.Fragment>
            <div class="desktop-menu">
                <ul>
                    <li>
                        <a href="/" class="title">My orders</a>
                    </li>

                    <li>
                        <a href="/">My account</a>
                    </li>

                    <li>
                        <a href="/">Sign out</a>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}

export {MenuHeader}