import React from 'react';
import { Layout } from '@containers/Layout'
import '@styles/recoveryPassword.scss'

import email from '@icons/email.svg';
import logo_yard from '@logos/logo_yard_sale.svg'

function RecoveryPassword(){
    return(
        <React.Fragment>
            <Layout>
                <div className="login">
                    <div className="form-container">
                    <img 
                        src={logo_yard} 
                        alt="logo" 
                        className="logo"
                    />

                    <h1 className="title">
                        Email has been sent!
                    </h1>

                    <p className="subtitle">
                        Please check your inbox for instructions on how to reset the password
                    </p>

                    <div className="email-image">
                        <img 
                            src={email} 
                            alt="email"
                        />
                    </div>

                    <button className="primary-button login-button">
                        Login
                    </button>

                    <p className="resend">
                        <span>Didn't receive the email?</span>
                        <a href="/">Resend</a>
                    </p>
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    );
}

export { RecoveryPassword }