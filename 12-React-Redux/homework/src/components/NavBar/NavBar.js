import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../logoHenry.png'

import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <div>
                <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/" >Home</NavLink>{/* Recordar que usamos el exact para que solo lo muestre con exacta coincidencia */}
                        <NavLink to="/favs" >Favoritas</NavLink>{/* NavLik != Link porque permite mostrar cual está activo con estilos */}
                    </li>
                </ul>
            </nav>
        </header>
    )
}