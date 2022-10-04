import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards.jsx'

export default function App() {
  //acá va la lógica de mi componente.
  //Creo estados como arreglo que contiene estado y funcion que lo cambia.
  const [cities, setCities] = useState([]); 
  const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

  //Declaro la funcion que le va a pasar al hijo y 
  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });

    }

  function onClose(id){
    setCities(oldCities => oldCities.filter(c => c.id !== id))
  }

  //Nos falta la función que llamará las ciudades de nuestra API para que la APP funcione.




  return (
    <div className="App">
      {/* renderizo los elementos con sus props correspondientes. */}
      <Nav onSearch={onSearch}/>
      <Cards cities={cities} onClose={onClose}/>
    </div>
  );
}
