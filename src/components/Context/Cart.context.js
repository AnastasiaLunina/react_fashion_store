import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    // check if cartItems contains productToAdd
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    // If match found, return new array of cartItems and increment quantity
    // If does not match, return cartItem
    if (existingCartItem) {
        return cartItems.map((cartItem) => 
        cartItem.id === productToAdd.id ? 
        {...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }
    // Return new array with modified cartItems
    // Returns all of the existing cart items, and adds new product together with quantity
    return [...cartItems, { ...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, cartitemToRemove) => {
    // find the cart item to remove
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartitemToRemove.id);
    
    // check if quantity is equal to 1, if so remove that item from cart 
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartitemToRemove.id)
    }

    // return back cart items wth matching cart item with reduced quantity
    return cartItems.map((cartItem) => 
    cartItem.id === cartitemToRemove.id ? 
    {...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
}

const clearCartItem = (cartItems, cartitemToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== cartitemToClear.id)
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0,
})



export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    // Everytime cartItems array changes, recalculate the array
    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
        setCartTotal(newCartTotal);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = (cartitemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartitemToRemove));
    }

    const clearItemFromCart = (cartitemToClear) => {
        setCartItems(clearCartItem(cartItems, cartitemToClear));
    }


    const value = {isCartOpen, 
                   setIsCartOpen, 
                   addItemToCart, 
                   removeItemFromCart, 
                   clearItemFromCart, 
                   cartItems, 
                   cartCount,
                   cartTotal,
                };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}