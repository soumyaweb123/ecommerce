import React ,{createContext, useState}from 'react';
import all_product from '../Components/Assists/all_product'
export const ShopContext = createContext(null);
  const getDefaultCart=()=>{
        let cart={};
        for(let index=0;index<all_product.length+1;index++){
            cart[index]=0;
    }
    return cart
    }
const ShopContextProvider = (props)=>{
        const [cartItems,setCartItems]=useState(getDefaultCart());

    const addToCart=(itemId)=>{
        setCartItems((prev)=>({
            ...prev,[itemId]:prev[itemId]+1
        }))
        console.log(cartItems)
    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
 const getDefaultCartAmount = () => {
  let totalAmount = 0;
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      // Convert item to number if product ids are numbers
      const itemId = Number(item);
      const itemsInfo = all_product.find((product) => product.id === itemId);
      if (itemsInfo) {
        totalAmount += itemsInfo.new_price * cartItems[item];
      }
    }
  }
  return totalAmount;
}
const getTotalCartItems =()=>{
    let totalItem =0;
    for(const item in cartItems){
        if(cartItems[item]>0)
        {
            totalItem+=cartItems[item];

        }
    }
    return totalItem;
}


        const contextValue={getTotalCartItems, getDefaultCart,getDefaultCartAmount ,all_product,cartItems,addToCart,removeFromCart};

    // console.log(cartItems)
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;


