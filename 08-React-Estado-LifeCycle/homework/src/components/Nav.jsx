import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import styles from './Nav.css';

function Nav({onSearch}) {
  return (
    <div>
    <nav className="navbar navbar-dark bg-dark">
      <img className={styles.logoHenry} src={Logo} alt = 'Logo'/>
      <a className="navbar-brand" href='https://www.soyhenry.com'>Henry Weather - App</a>
      <SearchBar onSearch = {onSearch}/>
    </nav>
    </div> 
  );
};

export default Nav;
