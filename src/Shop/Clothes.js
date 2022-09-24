import './Store.css';
import './Store.js';

function Clothes({garment}) {
  return (
    <div className='products'>
        {garment?.map((item) => {
            const {id, name, searchTerm, price, image, description} = item;
            return(
                <div className='product-card' key={id}>
                    <img src={image} alt='clothes' width='400px' height='500px'/>
                    <div className='product-info'>
                        <div className='product-description'>
                            <p>{name}</p>
                            <p>${price}</p>
                        </div>
                        <p className='description'>{description}</p>
                    </div>
                </div>
            )
        })}
    </div>
  );
}

export default Clothes;
