import React from 'react';
import styles from './Card.module.css';

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  return <div className={styles.box}>
  <button className={styles.button} onClick = {onClose}>x</button>
  <h3>{name}</h3>
  <div className={styles.cityweather}>
    <h5>Min</h5>
    <p>{min}</p>
  </div>
  <div className={styles.cityweather}>
    <h5>Max</h5>
    <p>{max}</p>
  </div>
  <img className={styles.image} src={`http://openweathermap.org/img/wn/${img}@2x.png`} 
  alt="icon"/>
</div>
};