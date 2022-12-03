import React, { useState } from 'react';
import { useEffect } from 'react';
import MovieService from '../../api/MovieService';
import ListMovie from '../../components/ListMovie/ListMovie';
import './MovieSearchPage.scss';

const MovieSearch = () => {

    const [popularMovies, setPopularMovies] = useState([])

    const onClickMovies = async () => {
        const mov = await MovieService.getPopularMovies()  
        const { results } = mov
        setPopularMovies(results)
        console.log(results)
    }

    useEffect( () => {
        onClickMovies()  
    }, [])

    return (
        <div className="MovieSearch">
            <div className="MovieWrapper">
                <div className="PopularMovies">
                    <div className="TitleWrapper">
                        <a href="#"><h2>Popular Movies</h2></a>
                    </div>
                    <ListMovie movies={popularMovies} />
                </div>
            </div>  
        </div>
    )
}

export default MovieSearch