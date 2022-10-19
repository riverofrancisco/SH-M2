import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import {removeMovieFavorite } from "../../actions"

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {/* Aqui deberias poner tu lista de peliculas! */}
        {this.props.movies && this.props.movies.map( movie => (
          <div key={movie.id}>{/* este id viene del estado */}
            <Link to={`/movie/${movie.id}`}>
              {movie.title}
            </Link>
            <button onClick={() => this.props.removeMovieFavorite(movie.id)}>REMOVE MOVIE</button>
          </div>

        ))
        }
        </ul>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {//le habilito el acceso a la propiedad de mi estado a este componente.
    movies: state.moviesFavorites //Dentro del componente accedo a ellas con => this.props.movies
  };
}

function mapDispatchToProps(dispatch) {
  return {//Qué quiero que se ejecute cuando invoque las props del siguiente objeto.
    removeMovieFavorite: movieID => dispatch(removeMovieFavorite(movieID))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
