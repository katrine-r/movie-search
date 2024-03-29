import React, { useState } from 'react';
import classes from './MovieSearchHomePage.module.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MovieService from '../../api/MovieService';
import SlickSlider from '../../components/UI/SlickSlider/SlickSlider';
import { getNowPlayingMovies, getPopularMovies, getUpcomingMovies } from '../../store/actions/moviesList';
import { getPopularTVShows } from '../../store/actions/tvShowsList';
import Loader from '../../components/UI/Loader/Loader';
import { useFetching } from '../../hooks/useFetching';

const MovieSearch = () => {

    const dispatch = useDispatch()
    const { popularMovies, upcomingMovies, nowPlayingMovies } = useSelector((state) => state.moviesList)
    const { popularTVShows } = useSelector((state) => state.tvShowsList)
    const [currentPage, setCurrentPage] = useState(1)
    const [selected, setSelected] = useState('popularity.desc')
    const [fetching, isLoading, error] = useFetching(() => {
        onPopularMovies()
        onPopularTVShows()
        onUpcomingMovies()
        onNowPlayingMovies()
    })

    const onPopularMovies = async () => {
        const mov = await MovieService.getPopularMovies(currentPage, selected)  
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

    useEffect(() => {
        fetching()
    }, [])

    return (
        <div className={classes.MovieSearch}>
            <div className={classes.MovieWrapper}>
                <div className={classes.PopularMovies}>
                    { isLoading
                        ? <div className={classes.Loading}>
                            <Loader />
                          </div>
                        : <>        
                            <div className={classes.TitleWrapper}>
                                <Link to="/popular-movies"><h2>Популярные фильмы</h2></Link>
                            </div>
                            <SlickSlider movies={popularMovies} />
                    
                            <div className={classes.TitleWrapper}>
                                <Link to="/"><h2>Популярные сериалы</h2></Link>
                            </div>
                            <SlickSlider tvShows={popularTVShows} />
                        
                            <div className={classes.TitleWrapper}>
                                <Link to="/"><h2>Скоро в прокате</h2></Link>
                            </div>
                            <SlickSlider movies={upcomingMovies} />
                    
                            <div className={classes.TitleWrapper}>
                                <Link to="/"><h2>Сейчас в кинотеатре</h2></Link>
                            </div>
                            <SlickSlider movies={nowPlayingMovies} />    
                          </>
                    }
                </div>
            </div>  
        </div>
    )
}

export default MovieSearch