import React from 'react';
import { Link } from "react-router-dom";
import iconPage2 from '../assets/static/iconPage2.png';
import IfOffline from './IfOffline';
import '../assets/styles/Header.css';

const Header = () => (
    <header>
        <nav>
            <ul>
                <li>
                    <Link to="/escalas" className="to">Escalas</Link></li>
                <li className="imgContent">
                    <Link to="/" className="to">
                        <img className="logo" src={iconPage2} alt="icono de la pagina" />
                        <IfOffline>Offline</IfOffline>
                    </Link>
                </li>
                <li>
                    <Link to="/circulos" className="to">Circulos</Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;