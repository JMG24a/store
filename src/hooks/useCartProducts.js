import { useState } from "react";  

const initialState = {
    cart: [],
}

const useCartProducts = () =>{

    const [state,setState] = useState(initialState);

    const addProductCart = (payload) =>{
        setState({
            ...state,
            cart: [...state.cart,payload]
        });
    }

    return{
        state:{
            ...state,
        },
        addProductCart,
  
    }
}

export { useCartProducts }


