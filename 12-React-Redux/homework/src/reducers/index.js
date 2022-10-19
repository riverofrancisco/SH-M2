const initialState = {
    moviesFavorites: [],//lista de favs
    moviesLoaded: [],//pelis cargadas
    movieDetail: {}//detalle de una pelicula
  };

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_MOVIE_FAVORITE":
            return {
                ...state,
                moviesFavorites: state.moviesFavorites.concat(action.payload)//generará un arreglo de objetos con su title y ID
              }
        case "GET_MOVIES":
            return {
                ...state,
                moviesLoaded: action.payload.Search
              };
        case "REMOVE_MOVIE_FAVORITE":
            return {
                ...state,
                moviesFavorites: state.moviesFavorites.filter(movie => movie.id !== action.payload)
              };
        
        case "GET_MOVIE_DETAIL":
            return {
                ...state,
                movieDetail: action.payload
              };
        
        default:
            return state;
    }
  }
  
  export default rootReducer;