import React, { useContext, useState } from 'react';
import { TodoContext } from '../TodoContext';
import '../assets/styles/SearchInput.css';

const SearchInput = () => {

    const { searchValue, setSearchValue } = useContext(TodoContext);
    const [valuiInput, setValuiInput] = useState('');
    const onSearchValueChange = (event) => {
        setValuiInput(event.target.value);
        setSearchValue(event.target.value);
    };

    return (
        <div className="search-container">
            <div className="main-chord">
                {valuiInput ? <h1>{valuiInput}</h1> : <h1>Busque el acorde</h1>}
            </div>
            <input
                className="input"
                type="text"
                value={searchValue}
                onChange={onSearchValueChange}
            />
        </div>
    )
};

export default SearchInput;
