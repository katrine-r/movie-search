import React, { useEffect, useState } from 'react';
import classes from './PopularMoviesPage.module.scss';
import ListMovies from '../../../components/ListMovies/ListMovies';
import { useDispatch, useSelector } from 'react-redux';
import MovieService from '../../../api/MovieService';
import { getPopularMovies } from '../../../store/actions/moviesList';
import { getArrayTotalPages } from './../../../utils'
import classNames from 'classnames';
import Loader from '../../../components/UI/Loader/Loader';
import { useFetching } from '../../../hooks/useFetching';
import ArrowBack from '../../../icons/ArrowBack';
import ArrowForward from '../../../icons/ArrowForward';

const PopularMoviesPage = () => {

    const dispatch = useDispatch()
    const { popularMovies } = useSelector((state) => state.moviesList)
    const [selected, setSelected] = useState('popularity.desc')
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState()
    const [fetching, isLoading, error] = useFetching(() => {
        onPopularMovies()
    })

    const onPopularMovies = async () => {
        const mov = await MovieService.getPopularMovies(currentPage, selected)  
        setTotalPages(mov.total_pages) 
        const { results } = mov
        dispatch(getPopularMovies(results))
    }

    useEffect(() => {
        fetching()
    }, [currentPage, selected])
    
    const pages = []
    getArrayTotalPages(pages, totalPages, currentPage)
    console.log(pages)

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
            window.scroll(0,0)
        }
    }

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
            window.scroll(0,0)
        }
    }

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
                            onChange={(ev) => setSelected(ev.target.value)}
                        >
                            <option value="">Сортировать по...</option>
                            <option value={'popularity.desc'}>По популярности (убывание)</option>
                            <option value={'popularity.asc'}>По популярности (возрастание)</option>
                            <option value={'vote_average.desc'}>По рейтингу (убывание)</option>
                            <option value={'vote_average.asc'}>По рейтингу (возрастание)</option>
                            <option value={'release_date.desc'}>По дате выпуска (убывание)</option>
                            <option value={'release_date.asc'}>По дате выпуска (возрастание)</option>
                            <option value={'original_title.desc'}>По названию (убывание)</option>
                            <option value={'original_title.asc'}>По названию (возрастание)</option>
                        </select>
                    </div>

                    { isLoading
                        ? <div className={classes.Loading}>
                            <Loader />
                          </div>
                        : <>
                            <ListMovies movies={popularMovies} />
                        
                            <ul className={classes.Pagination}>
                                <button 
                                    onClick={() => prevPage()} 
                                    className={classNames(classes.ButtonsPagination, 
                                        {[classes.DisabledButton]: currentPage === 1})}
                                >
                                    <ArrowBack />
                                </button>
                                { pages?.map((i) => (
                                    <li 
                                        key={i}
                                        className={classNames(classes.PaginationItem, {[classes.active]: currentPage === i})}
                                        onClick={() => {
                                            setCurrentPage(i)
                                            window.scroll(0,0)
                                        }}
                                    >
                                        {i}
                                    </li>
                                ))
                                }
                                <button 
                                    onClick={() => nextPage()} 
                                    className={classNames(classes.ButtonsPagination, 
                                        {[classes.DisabledButton]: currentPage === totalPages})}
                                >
                                    <ArrowForward />
                                </button>
                            </ul>
                          </>
                    }
                </div>
            </div>  
        </div>
    )
}

export default PopularMoviesPage