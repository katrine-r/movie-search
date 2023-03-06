import React, { useEffect, useState } from 'react';
import classes from './PopularMoviesPage.module.scss';
import ListMovies from '../../../components/ListMovies/ListMovies';
import { useDispatch, useSelector } from 'react-redux';
import MovieService from '../../../api/MovieService';
import { getPopularMovies } from '../../../store/actions/moviesList';

const PopularMoviesPage = () => {

    const dispatch = useDispatch()
    const { popularMovies } = useSelector((state) => state.moviesList)
    const [selected, setSelected] = useState('')

    const onPopularMovies = async () => {
        const mov = await MovieService.getPopularMovies()  
        const { results } = mov
        dispatch(getPopularMovies(results))
    }

    const selectSort = ev => {
        setSelected(ev.target.value)
        if (ev.target.value === 'popularity_down') {
            dispatch(getPopularMovies([
                ...popularMovies.sort((a,b) => {
                    return b.popularity - a.popularity
                })
            ]))
        } else if (ev.target.value === 'popularity_up') {
            dispatch(getPopularMovies([
                ...popularMovies.sort((a,b) => {
                    return a.popularity - b.popularity
                })
            ]))
        }

        if (ev.target.value === 'vote_average_down') {
            dispatch(getPopularMovies([
                ...popularMovies.sort((a,b) => {
                    return b.vote_average - a.vote_average
                })
            ]))
        } else if (ev.target.value === 'vote_average_up') {
            dispatch(getPopularMovies([
                ...popularMovies.sort((a,b) => {
                    return a.vote_average - b.vote_average
                })
            ]))
        }
    }

    useEffect( () => {
        onPopularMovies()
    }, [])

    return (
        <div className={classes.PopularMoviesPage}> 
            <div className={classes.MovieWrapper}>
                <div className={classes.PopularMovies}>
                    <div className={classes.TitleWrapper}>
                        <h2>Популярные фильмы</h2>
                    </div>
                    <div className={classes.SortAndFilterWrapper}>
                        <label htmlFor="sort-movies">Сортировка</label>
                        <select 
                            className={classes.SelectSort} 
                            name="sort-movies" 
                            id="sort-movies"
                            value={selected}
                            onChange={selectSort}
                        >
                            <option value="">Сортировать по...</option>
                            <option value={'popularity_down'}>По популярности (убывание)</option>
                            <option value={'popularity_up'}>По популярности (возрастание)</option>
                            <option value={'vote_average_down'}>По рейтингу (убывание)</option>
                            <option value={'vote_average_up'}>По рейтингу (возрастание)</option>
                        </select>
                    </div>
                    <ListMovies movies={popularMovies} />
                </div>
            </div>  
        </div>
    )
}

export default PopularMoviesPage