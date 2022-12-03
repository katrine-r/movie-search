import React from 'react';
import './ListMovieItem.scss';

const URL_IMAGES_SMALL = process.env.REACT_APP_URL_IMAGES_SMALL

const ListMovieItem = ({ 
    id,
    title,
    poster_path,
    release_date,
    vote_average
 }) =>  {

    return (
        <li className="ListMovieItem">
            <a href="#">
                <img className="ImgPoster" src={`${URL_IMAGES_SMALL}${poster_path}`} alt="Poster" />
            </a>
            <div className="ItemContent">
                <a href=""><h3>{title}</h3></a>
                <p>{release_date}</p>
                <p>{vote_average}</p>
            </div>
        </li>
    )
 }

export default ListMovieItem