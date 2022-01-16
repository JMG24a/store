import { useState } from "react";  

const useStateHook = () =>{
    const [state,setState] = useState('hola');

    return{
        state,
        setState
    }
}

export {useStateHook}