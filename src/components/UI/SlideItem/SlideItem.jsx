import React from 'react';
import classes from './SlideItem.module.scss';
import { useNavigate } from 'react-router-dom';
import Progressbar from 'react-js-progressbar';

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
            <a onClick={() => navigate(`/card-movie/${id}`)} className={classes.LinkImgPoster}>
                <img 
                    className={classes.ImgPoster} 
                    src={`${URL_IMAGES_SMALL}${poster_path}`} 
                    alt="Poster"
                />
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
            </div>
        </div>
    )
 }

export default SlideItem