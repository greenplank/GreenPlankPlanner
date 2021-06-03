import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";


export const SelectionContext = createContext();

export default function CartProvider(props) {
  const [selectedTerraceEnv, setSelectedTerraceEnv] = useState(null);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const Total = cartItems.reduce(
      (sum, item) => sum + item.price * item.cartQuantity,
      0
    );
    setCartTotal(Total);
    localStorage.setItem("nexusberryCart", JSON.stringify(cartItems));
  }, [cartItems]);



  // Add Product To Cart
  const addToCart = (item, quantity = 1, selectedDrink = "Coke") => {
    const index = cartItems.findIndex(
      itm => itm.id === item.id && itm.drink === selectedDrink
    );
    if (index === -1) {
      const product = { ...item, cartQuantity: quantity, drink: selectedDrink };
      setCartItems([...cartItems, product]);
    }
    else{
      const copyCart = [...cartItems];
      copyCart[index].cartQuantity += quantity;
      setCartItems(copyCart);
    }
  };


  // Incremen or Decrement Quantity
  const updateQuantity = (item, delta) => {
    const copyCart = [...cartItems];
    const index = copyCart.findIndex(itm => itm.id === item.id && itm.drink === item.drink);
    copyCart[index].cartQuantity += delta;
    setCartItems(copyCart);
  };

  
  const removeFromCart = item => {
    setCartItems(
      cartItems.filter(e => {
        if(e.id === item.id)
          return e.drink !== item.drink ? true : false;
        else
          return true;
      }
    ))
  };

  const totalCartItems = cartItems.reduce(
    (sum, item) => sum + item.cartQuantity,
    0
  );

  const unitsInCart = item => cartItems.reduce(
      (sum, e) => (e.id === item.id ? sum + e.cartQuantity : sum),
      0
    );

  return (
    <CartContext.Provider
      value={{
        ...props,
        cartTotal,
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        unitsInCart,
        totalCartItems,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
