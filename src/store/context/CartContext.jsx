import { createContext, useContext, useState } from "react";


const CartContext = createContext();


export const CartProvider = ({children}) =>{
     const [cartItem,setCartItems] = useState([]);

     const addToCart = (items)=>{
         setCartItems([...cartItem,items]);
     }

     const deleteCartItems = (item)=>{
        setCartItems(cartItem.filter(pro=> pro !== item))
     }

     return (
        <CartContext.Provider value={{cartItem,addToCart,deleteCartItems}}>
            {children}
        </CartContext.Provider>
     )
}

export const useCart = () =>{
    return useContext(CartContext);
}