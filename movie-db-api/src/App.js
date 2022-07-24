import { useEffect, useState } from "react";
import axios from 'axios'
import Movie from "./components/Movie";
import MovieNotFound from "./components/MovieNotFound";


const API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5e33883582778ffbbeabc7c17b88974c&page=1";

const IMG_API = "https://image.tmdb.org/t/p/w500/"

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=5e33883582778ffbbeabc7c17b88974c&query="


function App() {

  const [movies, setMovies] = useState([])
  const [serachTerm, setSearchTerm] = useState('');
  useEffect(() => {
    
       getMovies(API)


  }, [])

  const getMovies = (API) => {
    axios.get(API).then((res) => {
      setMovies(res.data.results)
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (serachTerm) {

      getMovies(SEARCH_API + serachTerm)
      setSearchTerm('')
    }

  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
  }


  return (
    <>
      <header>
        <form onSubmit={handleOnSubmit}>


          <input className="search"
            type='search'
            placeholder="Search..."
            value={serachTerm}
            onChange={handleOnChange}
          ></input>
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 ? (movies.map(movie => (
        
          <Movie key={movie.id} {...movie} />
          
        ))):
        <MovieNotFound />
        
          }
      </div>
    </>
  );
}

export default App;
