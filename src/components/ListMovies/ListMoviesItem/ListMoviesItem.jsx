import React from 'react';
import classes from './ListMoviesItem.module.scss';
import { useNavigate } from 'react-router-dom';

const URL_IMAGES_SMALL = process.env.REACT_APP_URL_IMAGES_SMALL

const ListMovieItem = ({ 
    id,
    title,
    poster_path,
    release_date,
    vote_average
 }) =>  {

    const navigate = useNavigate()

    return (
        <li className={classes.ListMovieItem}>
            <a onClick={() => navigate(`/card-movie/${id}`)}>
                <img 
                    className={classes.ImgPoster} 
                    src={`${URL_IMAGES_SMALL}${poster_path}`} 
                    alt="Poster" 
                />
            </a>
            <div className={classes.ItemContent}>
                <a onClick={() => navigate(`/card-movie/${id}`)}><h3>{title}</h3></a>
                <p>{release_date}</p>
                <p>{vote_average}</p>
            </div>
        </li>       
    )
 }

export default ListMovieItem