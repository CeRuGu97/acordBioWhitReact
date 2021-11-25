import React from 'react';

const ListCards = ({ children }) => {
    return (
        <div className="cards-container-main">
            <ul className="resultadoBuscado">
                {children}
            </ul>
        </div>
    )
}

export default ListCards;
