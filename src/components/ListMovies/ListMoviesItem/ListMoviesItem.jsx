import React from 'react';
import classes from './ListMoviesItem.module.scss';
import { useNavigate } from 'react-router-dom';
import Progressbar from 'react-js-progressbar';
import Image from '../../../icons/Image';

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
            <a onClick={() => navigate(`/card-movie/${id}`)} className={classes.LinkImgPoster}>
                { poster_path
                    ? <img 
                        className={classes.ImgPoster} 
                        src={`${URL_IMAGES_SMALL}${poster_path}`} 
                        alt="Poster" 
                      />
                    : <div className={classes.NoImgPoster}>
                        <Image width='128' height='128' />
                      </div>
                }
                <div id='progressbarContainer' className={classes.Progressbar}>     
                    <Progressbar
                        input={vote_average*10}
                        pathWidth={10}
                        pathColor={['#56ab2f', '#a8e063']}
                        trailWidth={20}
                        trailColor='#363636'
                        textStyle={{ fill: 'white', fontSize: '70px', fontWeight: 'bold' }}
                        size={50}
                        backgroundColor='#15151A'
                    />            
                </div>
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