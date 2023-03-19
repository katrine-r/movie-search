import React, { useEffect, useState } from 'react';
import classes from './CardTVShowPage.module.scss';
import { useParams } from 'react-router-dom';
import MovieService from '../../../api/MovieService';
import Progressbar from 'react-js-progressbar';
import CastList from '../../../components/CastList/CastList';
import Image from '../../../icons/Image';

const URL_IMAGES_SMALL = process.env.REACT_APP_URL_IMAGES_SMALL
const URL_IMAGES_ORIGINAL = process.env.REACT_APP_URL_IMAGES_ORIGINAL

const CardTVShowPage = () => {

    const [tvShowById, setTvShowById] = useState({})
    const [actorsById, setActorsById] = useState({})
    const { id } = useParams()

    const getActiveTVShowById = async () => {
        const tv = await MovieService.getTVShowById(id)
        setTvShowById(tv)
    }

    const getActorsTVShow = async () => {
        const act = await MovieService.getActorsByIdTVShow(id)
        setActorsById(act)
    }

    useEffect(() => {
        getActiveTVShowById()
        getActorsTVShow()
    }, [])

    return (
        <div className={classes.CardTVShowPage}>
            <div className={classes.ImgPosterContainer}>
                { tvShowById.backdrop_path
                    ? <img 
                        className={classes.ImgPosterBackground} 
                        src={`${URL_IMAGES_ORIGINAL}${tvShowById.backdrop_path}`} 
                        alt="Poster" 
                      />
                    : <div className={classes.NoImgPosterBackground}></div>
                }
                <div className={classes.ShortDescriptionCard}>
                    <div>
                        { tvShowById.poster_path
                            ? <img 
                                className={classes.ImgPoster} 
                                src={`${URL_IMAGES_SMALL}${tvShowById.poster_path}`} 
                                alt="Poster" 
                              />
                            : <div className={classes.NoImgPoster}>
                                <Image width='256' height='256' />
                              </div>
                        }
                    </div>
                    <div className={classes.Description}>
                        <h1>{tvShowById.name}</h1>
                        <div className={classes.FactsMovie}>
                            <ul className={classes.GenresList}>
                                { tvShowById?.genres?.map((i, index) => (
                                    <li key={index} id={i.id} name={i.name}>
                                        {i.name}
                                    </li>
                                  ))}
                            </ul>
                            
                            <div className={classes.ReleasDateAndRuntimeWrapper}>
                                <div id='progressbarContainer'>                                    
                                    <Progressbar
                                        input={tvShowById.vote_average*10}
                                        pathWidth={20}
                                        pathColor={['#56ab2f', '#a8e063']}
                                        trailWidth={30}
                                        trailColor='#363636'
                                        textStyle={{ fill: 'white', fontSize: '70px', fontWeight: 'bold' }}
                                        size={60}
                                    />
                                </div>
                                <span>{tvShowById.release_date}</span>
                                { tvShowById.number_of_seasons
                                    ? <span>{tvShowById.number_of_seasons} сезон</span>
                                    : null
                                }
                                { tvShowById.episode_run_time > 0
                                    ? <span>{tvShowById.episode_run_time} мин.</span>
                                    : null
                                }
                            </div>
                        </div>
                        <div className={classes.Overview}>
                            <h3>Обзор</h3>
                            <p>{tvShowById.overview}</p>
                        </div>
                    </div>
                </div>
            </div>

            <CastList actorsById={actorsById} />
        </div>
    )
}

export default CardTVShowPage