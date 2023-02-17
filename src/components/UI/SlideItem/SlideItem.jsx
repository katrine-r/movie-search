import React from 'react';
import classes from './SlideItem.module.scss';
import { useNavigate } from 'react-router-dom';

const URL_IMAGES_SMALL = process.env.REACT_APP_URL_IMAGES_SMALL

const SlideItem = ({ 
    id,
    title,
    poster_path,
    release_date,
    vote_average
 }) =>  {

    const navigate = useNavigate()

    return (
        <div className={classes.SlideItem}>
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
        </div>
    )
 }

export default SlideItem