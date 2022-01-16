import React from 'react';
import { AppProvider } from '../context/AppContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '@pages/Login';
import { Register } from '@pages/Register';
import { RecoveryPassword } from '@pages/RecoveryPassword';
import { NewPassword } from '@pages/NewPassword';
import { Home } from '@pages/Home';
import { EditUser } from '@pages/EditUser';
import { NotFont } from '@pages/NotFont';

function App(){
    return(
        <AppProvider>
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
                        exact path="/edit-user"
                        element={<EditUser/>}
                    />
                    <Route 
                        exact path="/*" 
                        element={<NotFont/>}
                    />
                </Routes>
            </BrowserRouter>
        </AppProvider>    
    );
};

export {App};