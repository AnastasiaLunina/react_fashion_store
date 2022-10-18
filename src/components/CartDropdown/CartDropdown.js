import { useContext } from 'react';

import './CartDropdown.scss';

import ItemInCartDropDown from '../ItemInCartDropdown/ItemInCartDropDown';
import { CartContext } from '../Context/Cart.context';


const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => (
                <ItemInCartDropDown key={item.id} cartItem={item}/>
                ))}
            </div>
                <button className='button-checkout'>GO TO CHECKOUT</button>
        </div>
    )

}

export default CartDropdown;