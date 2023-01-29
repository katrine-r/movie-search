import React from 'react';
import './MovieSearchHomePage.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MovieService from '../../api/MovieService';
import SlickSlider from '../../components/UI/SlickSlider/SlickSlider';
import { getNowPlayingMovies, getPopularMovies, getUpcomingMovies } from '../../store/actions/moviesList';
import { getPopularTVShows } from '../../store/actions/tvShowsList';

const MovieSearch = () => {

    const dispatch = useDispatch()
    const { popularMovies, upcomingMovies, nowPlayingMovies } = useSelector((state) => state.moviesList)
    const { popularTVShows } = useSelector((state) => state.tvShowsList)

    const onPopularMovies = async () => {
        const mov = await MovieService.getPopularMovies()  
        const { results } = mov
        dispatch(getPopularMovies(results))
        console.log(results)
        console.log('total_pages', mov.total_pages)
    }

    const onPopularTVShows = async () => {
        const tv = await MovieService.getPopularTVShows()  
        const { results } = tv
        dispatch(getPopularTVShows(results))
        console.log(results)
        console.log('total_pages', tv.total_pages)
    }

    const onUpcomingMovies = async () => {
        const mov = await MovieService.getUpcomingMovies() 
        const { results } = mov
        dispatch(getUpcomingMovies(results))
        console.log(results)
    }

    const onNowPlayingMovies = async () => {
        const mov = await MovieService.getNowPlayingMovies() 
        const { results } = mov
        dispatch(getNowPlayingMovies(results))
        console.log(results)
    }

    useEffect( () => {
        onPopularMovies()
        onPopularTVShows()
        onUpcomingMovies()
        onNowPlayingMovies()
    }, [])

    return (
        <div className="MovieSearch">
            <div className="MovieWrapper">
                <div className="PopularMovies">

                    <div className="TitleWrapper">
                        <Link to="/popular-movies"><h2>Популярные фильмы</h2></Link>
                    </div>
                    <SlickSlider movies={popularMovies} />

                    <div className="TitleWrapper">
                        <Link to="/"><h2>Популярные сериалы</h2></Link>
                    </div>
                    <SlickSlider tvShows={popularTVShows} />

                    <div className="TitleWrapper">
                        <Link to="/"><h2>Скоро в прокате</h2></Link>
                    </div>
                    <SlickSlider movies={upcomingMovies} />

                    <div className="TitleWrapper">
                        <Link to="/"><h2>Сейчас в кинотеатре</h2></Link>
                    </div>
                    <SlickSlider movies={nowPlayingMovies} />

                </div>
            </div>  
        </div>
    )
}

export default MovieSearch