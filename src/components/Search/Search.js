import React from 'react';
import '../Home/Home.css';

function Search({onChangeHandler}) {

  return (
    <div>
        <input type="search" 
                name="name" 
                className="input-search" 
                placeholder="search..."
                onChange={onChangeHandler}/>
    </div>
  );
}

export default Search;
