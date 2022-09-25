import './Store.css';

function Buttons({chosenClothes}) {
  return (
    <div className='cont'>
        <button className='change bn3637 bn36' onClick={() => chosenClothes('new')}>new</button>
        <button className='change bn3637 bn36' onClick={() => chosenClothes('basics')}>basics</button>
        <button className='change bn3637 bn36' onClick={() => chosenClothes('going out')}>going out</button>
        <button className='change bn3637 bn36' onClick={() => chosenClothes('wear to work')}>wear to work</button>
        <button className='change bn3637 bn36' onClick={() => chosenClothes('sport')}>sport</button>
    </div>
  );
}

export default Buttons;
