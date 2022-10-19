
export function addMovieFavorite(movie) {
    return { type: "ADD_MOVIE_FAVORITE", payload: movie };
  }

  export function removeMovieFavorite(filmID){
    return {
        type: "REMOVE_MOVIE_FAVORITE",
        payload: filmID
    }
}

export function getMovies(titulo) {
    return function(dispatch) {
      return fetch("http://www.omdbapi.com/?apikey=2d865f5f&s=" + titulo)//"cadena" el resultado anterior se ejecuta en el siguiente.
        .then(response => response.json())//convierte la respuesta en un .json o en otra notacion de objeto legible.
        .then(movies => {
          dispatch({ type: "GET_MOVIES", payload: movies});
        });
    };
}

export function getMovieDetail(idMovie) {
  return function(dispatch) {
    return fetch("http://www.omdbapi.com/?apikey=2d865f5f&i=" + idMovie)//"cadena" el resultado anterior se ejecuta en el siguiente. 
    //el fetch retorna promesa.
      .then(response => response.json())//convierte la respuesta en un .json o en otra notacion de objeto legible.
      .then(detail=> {
        dispatch({type: "GET_MOVIE_DETAIL", payload: detail});
      });
  };
}

