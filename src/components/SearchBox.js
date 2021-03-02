import React from 'react';


const SearchBox = ({searchfield, searchchange}) => {
    return (
        <div className = 'pa2'>
        <input 
        className = 'pa3 ba bg-lighest-blue'
        type = 'search' 
        placeholder = 'Search here'
        onChange = {searchchange}
        />
        </div>
    );
}

export default SearchBox;