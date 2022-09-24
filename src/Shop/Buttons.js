import './Store.css';
import './Store.js';

function Buttons({chosenClothes}) {
  return (
    <div className='cont'>
        <button className='change' onClick={() => chosenClothes('new')}>new</button>
        <button className='change' onClick={() => chosenClothes('basics')}>basics</button>
        <button className='change' onClick={() => chosenClothes('going out')}>going out</button>
        <button className='change' onClick={() => chosenClothes('wear to work')}>wear to work</button>
        <button className='change' onClick={() => chosenClothes('sport')}>sport</button>
    </div>
  );
}

export default Buttons;
