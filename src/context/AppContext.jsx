import React from 'react';
import { useStateHook } from '../hooks/useStateHook'

const AppContext = React.createContext();

function AppProvider(props){

    const {
        state,
        setState
    } = useStateHook();

    return(
        <AppContext.Provider value={{
            state,
            setState
        }}>
            {props.children}
        </AppContext.Provider>
    );
}

export {AppContext,AppProvider}