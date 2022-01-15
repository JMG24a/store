import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '@pages/Login';
import { Register } from '@pages/Register';
import { RecoveryPassword } from '@pages/RecoveryPassword'
import { NewPassword } from '@pages/NewPassword';
import { Home } from '@pages/Home'
import { NotFont } from '@pages/NotFont'

function App(){
    return(
        <BrowserRouter>   
            <Routes>
                <Route 
                    exact path="/login"
                    element={<Login/>}
                />
                <Route 
                    exact path="/register"
                    element={<Register/>}
                />    
                <Route 
                    exact path="/recovery-password"
                    element={<RecoveryPassword/>}
                />
                <Route 
                    exact path="/new-password"
                    element={<NewPassword/>}
                />  
                <Route 
                    exact path="/"
                    element={<Home/>}
                />
                <Route 
                    exact path="/*" 
                    element={<NotFont/>}
                />
            </Routes>
        </BrowserRouter>
    );
};

export {App};