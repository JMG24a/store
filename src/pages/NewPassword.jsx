import React from 'react'
//styles
import logo_yard from '@logos/logo_yard_sale.svg';
import '@styles/newPassword.scss';

function NewPassword(){
    return(
        <React.Fragment>
            <div className="login">

                <div className="form-container">

                    <img 
                        src={logo_yard} 
                        alt="logo" 
                        className="logo"
                    />

                    <h1 className="title">Create a new password</h1>
                    <p className="subtitle">Enter a new passwrd for yue account</p>

                    <form action="/" className="form">

                        <label for="password" className="label">
                            Password
                        </label>
                        <input 
                            type="password" 
                            id="password" 
                            placeholder="*********" 
                            className="input input-password"
                        />

                        <label for="new-password" className="label">
                            Password
                        </label>
                        <input 
                            type="password" 
                            id="new-password" 
                            placeholder="*********" 
                            class="input input-password"
                        />

                        <input 
                            type="submit" 
                            value="Confirm" 
                            className="primary-button login-button"
                        />
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

export {NewPassword}