import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getMovies , addMovieFavorite } from "../../actions";
import './Buscador.css';



export class Buscador extends Component {
  constructor(props) {
    super(props);//es un componente de react. Está importando las props de react.
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });//no hacemos spread operator porque el estado tiene una unico valor
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>{/* cuando en un form pongo un button submit, se ejecuta el onsubmit de arriba */}
        </form>
        <ul>
         {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */}
         
         {this.props.movies && this.props.movies.map(movie => (/* Si tengo this.props.movies entonces... */
         
            <div key={movie.imdbID}>{/* Me genera una key unica para c/div creado por el map. */}
            {/* RUTAS → para c/div → me van a mostrar el detalle de c/peli → había definido esta ruta en app */}
              <Link to = {`/movie/${movie.imdbID}`}>
                {movie.Title} | {movie.Year}
              </Link>
              <button onClick = {() => this.props.addMovieFavorite({title: movie.Title, id: movie.imdbID})}>FAV</button>
            </div>
            
         ))
         } 
        </ul>
      </div>
    );
  }
}

//Buscador.js

function mapStateToProps(state) {
  return {//le habilito el acceso a la propiedad de mi estado a este componente.
    movies: state.moviesLoaded //Dentro del componente accedo a ellas con => this.props.movies
  };
}

function mapDispatchToProps(dispatch) {
  return {//Qué quiero que se ejecute cuando invoque las props del siguiente objeto.
    addMovieFavorite: title => dispatch(addMovieFavorite(title)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);


/*


*/