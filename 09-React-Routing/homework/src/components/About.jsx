import React from 'react';
import s from './About.css'

function About(){
    const miPhrase = 'La única decisión posible es qué hacer con el tiempo que tenemos.';
    const Autor = 'Gandalf el Gris';
    return (
        <div>
        <h4 className={s.Phrase}>"{miPhrase}"</h4>
        <p className= {s.Author} >{Autor}</p>
        </div>
    );
}

export default About