import {useState, useEffect} from 'react';
import MovieCard from '../components/MovieCard';

import './MoviesGrid.css';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [topMovies, setTopMovies] = useState([])

    const getTopRateMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        
        setTopMovies(data.results)
    }

    useEffect(() => {

        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
        
        getTopRateMovies(topRatedUrl)

    }, [])

    return (
        <div className='container'>
           <h2 className='title'>Melhores Filmes:</h2>
           <div className="movies-container">
                {topMovies.length === 0 && <p>Carregando Filmes...</p>}
                {topMovies.length > 0 && topMovies.map((movie) => 
                    <MovieCard movie={movie} key={movie.id} />
                )}
           </div>
        </div>
    )
} 

export default Home