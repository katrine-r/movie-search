import React from 'react';
import './SlideItem.scss';

const URL_IMAGES_SMALL = process.env.REACT_APP_URL_IMAGES_SMALL

const SlideItem = ({ 
    id,
    title,
    poster_path,
    release_date,
    vote_average
 }) =>  {

    return (
        <div className="SlideItem">
            <a href="#">
                <img 
                    className="ImgPoster" 
                    src={`${URL_IMAGES_SMALL}${poster_path}`} 
                    alt="Poster"
                />
            </a>
            <div className="ItemContent">
                <a href=""><h3>{title}</h3></a>
                <p>{release_date}</p>
                <p>{vote_average}</p>
            </div>
        </div>
    )
 }

export default SlideItem