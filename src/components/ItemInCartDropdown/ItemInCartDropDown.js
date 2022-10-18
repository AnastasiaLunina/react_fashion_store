import './ItemInCartDropDown.scss';

const ItemInCartDropDown = ({ cartItem }) => {
    const { name, image, price, quantity } = cartItem;

    return (
        <div className='cart-item-container'>
            <img src={image} alt={`${name}`} />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </div>
        </div>
    )
}

export default ItemInCartDropDown;