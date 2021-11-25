import React, { useContext, useState } from 'react';
import { TodoContext } from '../TodoContext';
import '../assets/styles/Cards.css'

const Card = ({ acorde, img, id }) => {

    const { addChord } = useContext(TodoContext);
    const [staActiv, setStaActiv] = useState(false);

    const addFavorites = () => {
        if (!staActiv) {
            addChord(acorde, img, id);
        }
        setStaActiv(true);
    };

    return (
        <li>
            <div className="card-cont">
                <div>
                    <h2>{acorde}</h2>
                    <button onClick={addFavorites}>
                        <i className={`${staActiv ? "fas" : "far"} fa-star`}></i>
                    </button>
                </div>
                <div className="card-cont-img">

                    <img src={img} alt={`Acorde de ${acorde}`} />
                </div>
                <div>
                </div>
            </div>
        </li>
    )
}

const CardFavoritos = ({ acorde, img, onDelete }) => {
    return (
        <li>
            <div className="card-cont">
                <div>
                    <h2>{acorde}</h2>
                    <button onClick={onDelete}>
                        <i className="fas fa-star"></i>
                    </button>
                </div>
                <div className="card-cont-img">
                    <img src={img} alt={`Acorde de ${acorde}`} />
                </div>
            </div>
        </li>
    )
}

export { Card, CardFavoritos };
