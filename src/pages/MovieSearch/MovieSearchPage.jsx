import React, { useState } from 'react';
import { useEffect } from 'react';
import MovieService from '../../api/MovieService';
import SlickSlider from '../../components/UI/SlickSlider/SlickSlider';
import './MovieSearchPage.scss';

const MovieSearch = () => {

    const [popularMovies, setPopularMovies] = useState([])
    const [nowPlayingMovies, setNowPlayingMovies] = useState([])
    const [upcomingMovies, setUpcomingMovies] = useState([])

    const onPopularMovies = async () => {
        const mov = await MovieService.getPopularMovies()  
        const { results } = mov
        setPopularMovies(results)
        console.log(results)
    }

    const onUpcomingMovies = async () => {
        const mov = await MovieService.getUpcomingMovies() 
        const { results } = mov
        setUpcomingMovies(results)
        console.log(results)
    }

    const onNowPlayingMovies = async () => {
        const mov = await MovieService.getNowPlayingMovies() 
        const { results } = mov
        setNowPlayingMovies(results)
        console.log(results)
    }

    useEffect( () => {
        onPopularMovies()
        onUpcomingMovies()
        onNowPlayingMovies()
    }, [])

    return (
        <div className="MovieSearch">
            <div className="MovieWrapper">
                <div className="PopularMovies">

                    <div className="TitleWrapper">
                        <a href="#"><h2>Popular Movies</h2></a>
                    </div>
                    <SlickSlider movies={popularMovies} />

                    <div className="TitleWrapper">
                        <a href="#"><h2>Upcoming Movies</h2></a>
                    </div>
                    <SlickSlider movies={upcomingMovies} />

                    <div className="TitleWrapper">
                        <a href="#"><h2>Now Playing Movies</h2></a>
                    </div>
                    <SlickSlider movies={nowPlayingMovies} />

                </div>
            </div>  
        </div>
    )
}

export default MovieSearch