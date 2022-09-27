import React from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar({onSearch, }) {
  // acá va tu código
  return <div className={styles.box}>
  <input className={styles.input} type="text" placeholder='Ciudad...' />
  <button className={styles.button} onClick={() => {onSearch('valor del input')}}>Agregar</button>
</div>
};