import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {
    componentDidMount() {
        const movieID = this.props.match.params.id; //para obtener el 
        this.props.getMovieDetail(movieID) //actualizo el estado con el ID que corresponde.
    }



    render() {
        return (
            <div className="movie-detail">
                <h1>{this.props.movie.Title}</h1>
                <img src = {this.props.movie.Poster} alt='Poster'></img>
                <h2>{this.props.movie.Year}</h2>
                <p>{this.props.movie.Rated}</p>
                <p>{this.props.movie.Actors}</p>
                <p>{this.props.movie.Plot}</p>
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {//le habilito el acceso a la propiedad de mi estado a este componente.
      movie: state.movieDetail //Dentro del componente accedo a ellas con => this.props.movies
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {//Qué quiero que se ejecute cuando invoque las props del siguiente objeto.
      getMovieDetail: ID => dispatch(getMovieDetail(ID)),
    };
  }


export default connect(mapStateToProps, mapDispatchToProps)(Movie);