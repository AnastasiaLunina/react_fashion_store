import { useState } from 'react';

import Clothes from './Clothes';
import Buttons from './Buttons';
import { data } from '../../data';
import Sidebar from '../Sidebar/Sidebar';
import Nav from '../Home/Nav';

function StoreBase() {
    const [garment, setGarment] = useState(data);
  
    const chosenClothes = (searchTerm) => {
      const newClothes = data.filter(item => item.searchTerm === searchTerm);
      setGarment(newClothes);
    }

    const resetClothes = () => {
      setGarment(data);
    }

    return (
      <div>
        <Sidebar/>
        <Nav/>
          <div className='cont'>
            <h2 className='back'>Free Standard Shipping</h2>
          </div>
        <Buttons chosenClothes={chosenClothes} 
                 resetClothes={resetClothes} />
        <Clothes garment={garment}/>
      </div>
    );
  }
  
  export default StoreBase;