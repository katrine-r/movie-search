import React, { useEffect } from 'react';
import './PopularMoviesPage.scss'
import ListMovies from '../../../components/ListMovies/ListMovies';
import { useDispatch, useSelector } from 'react-redux';
import MovieService from '../../../api/MovieService';
import { getPopularMovies } from '../../../store/actions/moviesList';


const PopularMoviesPage = () => {

    const dispatch = useDispatch()

    const { popularMovies } = useSelector((state) => state.moviesList)

    const onPopularMovies = async () => {
        const mov = await MovieService.getPopularMovies()  
        const { results } = mov
        dispatch(getPopularMovies(results))
    }

    useEffect( () => {
        onPopularMovies()
    }, [])

    return (
        <div className="PopularMoviesPage"> 
            <div className="MovieWrapper">
                <div className="PopularMovies">
                    <div className="TitleWrapper">
                        <h2>Популярные фильмы</h2>
                    </div>
                    <ListMovies movies={popularMovies} />
                </div>
            </div>  
        </div>
    )
}

export default PopularMoviesPage