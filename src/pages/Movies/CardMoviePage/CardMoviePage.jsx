import React, { useEffect, useState } from 'react';
import classes from './CardMoviePage.module.scss';
import { useParams } from 'react-router-dom';
import MovieService from '../../../api/MovieService';
import Progressbar from 'react-js-progressbar';
import Modal from '../../../components/UI/Modal/Modal';
import Player from '../../../components/UI/Player/Player';
import CastList from '../../../components/CastList/CastList';
import PlayArrow from '../../../icons/PlayArrow';
import Image from '../../../icons/Image';
import { useFetching } from '../../../hooks/useFetching';

const URL_IMAGES_SMALL = process.env.REACT_APP_URL_IMAGES_SMALL
const URL_IMAGES_ORIGINAL = process.env.REACT_APP_URL_IMAGES_ORIGINAL

const CardMoviePage = () => {

    const [movieById, setMovieById] = useState({})
    const [actorsById, setActorsById] = useState({})
    const [videoById, setVideoById] = useState()
    const [clickWatchVideo, setClickWatchVideo] = useState(false)
    const [fetching, isLoading, error] = useFetching(() => {
        getActiveMovieById()
        getActorsMovie()
    })
    const { id } = useParams()

    const getActiveMovieById = async () => {
        const mov = await MovieService.getMovieById(id)
        setMovieById(mov)
    }

    const getActorsMovie = async () => {
        const act = await MovieService.getActorsByIdMovie(id)
        setActorsById(act)
    }

    const onWatchVideo = async () => {
        const mov = await MovieService.getVideosByIdMovie(id)
        const res = mov.results[0]
        setVideoById(res)
        setClickWatchVideo(!clickWatchVideo)
    }

    useEffect(() => {
        fetching()
    }, [])

    return (
        <div className={classes.CardMoviePage}>
            <div className={classes.ImgPosterContainer}>
        
                { movieById.backdrop_path
                    ? <img 
                        className={classes.ImgPosterBackground} 
                        src={`${URL_IMAGES_ORIGINAL}${movieById.backdrop_path}`} 
                        alt="Poster" 
                      />
                    : <div className={classes.NoImgPosterBackground}></div>
                }

                <div className={classes.ShortDescriptionCard}>
                    <div>
                        { movieById.poster_path
                            ? <img 
                                className={classes.ImgPoster} 
                                src={`${URL_IMAGES_SMALL}${movieById.poster_path}`} 
                                alt="Poster" 
                              />
                            : <div className={classes.NoImgPoster}>
                                <Image width='256' height='256' />
                              </div>
                        }
                    </div>
                    <div className={classes.Description}>
                        <h1>{movieById.title}</h1>
                        <div className={classes.FactsMovie}>
                            <ul className={classes.GenresList}>
                                { movieById?.genres?.map((i, index) => (
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
                                <button className={classes.Button} onClick={() => onWatchVideo(id)}>
                                    <PlayArrow />
                                    <span className={classes.TextButton}>Смотреть трейлер</span>
                                </button>
                                
                                { clickWatchVideo 
                                    ? <Modal 
                                        clickWatchVideo={clickWatchVideo}
                                        setClickWatchVideo={setClickWatchVideo}
                                      >
                                        <Player videoById={videoById} />
                                      </Modal>
                                    : null
                                }
                            </div>
                        </div>
                        <div className={classes.Overview}>
                            <h3>Обзор</h3>
                            <p>{movieById.overview}</p>
                        </div>
                    </div>
                </div>
            </div>

            <CastList actorsById={actorsById} />
        </div>
    )
}

export default CardMoviePage