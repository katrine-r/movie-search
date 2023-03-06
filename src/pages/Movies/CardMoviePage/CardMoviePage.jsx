import React, { useEffect, useState } from 'react';
import classes from './CardMoviePage.module.scss';
import { useParams } from 'react-router-dom';
import MovieService from '../../../api/MovieService';
import Progressbar from 'react-js-progressbar';

const URL_IMAGES_SMALL = process.env.REACT_APP_URL_IMAGES_SMALL
const URL_IMAGES_ORIGINAL = process.env.REACT_APP_URL_IMAGES_ORIGINAL

const CardMoviePage = () => {

    const [movieById, setMovieById] = useState({})
    const { id } = useParams()
    console.log("useParams id", id)

    const getActiveMovieById = async () => {
        const mov = await MovieService.getMovieById(id)
        setMovieById(mov)
    }

    useEffect(() => {
        getActiveMovieById()
    }, [])

    return (
        <div className={classes.CardMoviePage}>
            <div className={classes.ImgPosterContainer}>
                <img 
                    className={classes.ImgPosterBackground} 
                    src={`${URL_IMAGES_ORIGINAL}${movieById.backdrop_path}`} 
                    alt="Poster" 
                />
                <div className={classes.ShortDescriptionCard}>
                    <div>
                        <img 
                            className={classes.ImgPoster} 
                            src={`${URL_IMAGES_SMALL}${movieById.poster_path}`} 
                            alt="Poster" 
                        />
                    </div>
                    <div className={classes.Description}>
                        <h1>{movieById.title}</h1>
                        <div className={classes.FactsMovie}>
                            <ul className={classes.GenresList}>
                                { movieById.genres?.map((i, index) => (
                                    <li key={index} id={i.id} name={i.name}>
                                        {i.name}
                                    </li>
                                  ))}
                            </ul>
                            
                            <div className={classes.ReleasDateAndRuntimeWrapper}>
                                <div id='progressbarContainer'>                                    
                                    <Progressbar
                                        input={movieById.vote_average*10}
                                        pathWidth={20}
                                        pathColor={['#56ab2f', '#a8e063']}
                                        trailWidth={30}
                                        trailColor='#363636'
                                        textStyle={{ fill: 'white', fontSize: '70px', fontWeight: 'bold' }}
                                        size={60}
                                    />
                                </div>
                                <span>{movieById.release_date}</span>
                                <span>{movieById.runtime} мин.</span>
                            </div>
                        </div>
                        <div className={classes.Overview}>
                            <h3>Обзор</h3>
                            <p>{movieById.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardMoviePage