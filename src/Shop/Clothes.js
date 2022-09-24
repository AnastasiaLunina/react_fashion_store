import './Store.css';
import './Store.js';

function Clothes({garment}) {
  return (
    <div className='products'>
        {garment?.map((item) => {
            const {id, name, searchTerm, price, image} = item;
            return(
                <div className='product-card' key={id}>
                    <img src={image} alt='clothes' width='400px' height='500px'/>
                    <div className='product-info'>
                        <p>{id}</p>
                        <p>{name}</p>
                        <p>{searchTerm}</p>
                        <p>${price}</p>
                    </div>
                </div>
            )
        })}
    </div>
  );
}

export default Clothes;
