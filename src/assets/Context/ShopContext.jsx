import React, { createContext, useState } from "react";
import all_product from '../all_product';


export const ShopContest = createContext({all_product});

const getDefaultCat = () =>{
    let cart = {};
    for(let index =0; index < all_product.length+1; index++){
        cart[index]=0;

    }
    return cart;
}
const ShopContestProvider = (props) =>{
    const [cartItems, setcartItem] = useState(getDefaultCat());
   

    
    const addToCart = (itemid) =>{
        setcartItem((prev)=>({...prev,[itemid]:prev[itemid]+1}))
    }

    const addremoveCart = (itemid) =>{
        setcartItem((prev)=>({...prev,[itemid]:prev[itemid]-1}))
        console.log(cartItems);
    }
    const contextValue = {all_product,cartItems,addToCart,addremoveCart};
    return(
        <ShopContest.Provider value ={contextValue}>
            {props.children}
        </ShopContest.Provider>
    )
}
export default ShopContestProvider;