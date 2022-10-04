import React, { useState } from "react";

export default function SearchBar({onSearch}) {

  const [city, setCity] = useState('');

  //defino la función que se va a encargar de detectar cambios en el input.
  const handleInputChange = (event) => {
      event.preventDefault();
      setCity(event.target.value); 
    }


  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch({city});
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        /* atributo que se dispara cuando hay cambios. "Listener" Creo una funcion anonima para que no se autoejecute sin que haya cambios*/
        onChange = {(event) => handleInputChange(event)}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
