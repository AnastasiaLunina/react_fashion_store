import { useContext } from 'react';

import './CartDropdown.scss';

import ItemInCartDropDown from '../ItemInCartDropdown/ItemInCartDropDown';
import { CartContext } from '../Context/Cart.context';


const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    console.log(cartItems.length)

    function check() {
        if (cartItems.length !== 0) {
            return(
                <div className='cart-items custom-scroll'>
                    {cartItems.map((item) => (
                    <ItemInCartDropDown key={item.id} cartItem={item}/>
                    ))}
                </div>
            )
        } else {
            return(
                <div className='cart-items custom-scroll'>
                    <p className='empty-cart-message'>Cart is Empty</p>
                </div>
            )
        }
    }

    return(
        <div className='cart-dropdown-container'>
            {check()}
            <button className='button-checkout'>GO TO CHECKOUT</button>
        </div>
    )

}

export default CartDropdown;