import React from 'react';
import UserImage from '../../../icons/UserImage';
import classes from './CastListItem.module.scss';

const URL_IMAGES_SMALL = process.env.REACT_APP_URL_IMAGES_SMALL

const CastListItem = ({ character, name, profile_path }) => {
    return (
        <li className={classes.CastListItem}>
            { profile_path 
                ? <img 
                    className={classes.ImgActor} 
                    src={`${URL_IMAGES_SMALL}${profile_path}`}  
                    alt={name}
                  />
                : <div className={classes.NoImgActor}>
                    <UserImage />
                  </div>
            }

            <div className={classes.NameActorWrapper}>
                <span className={classes.NameActor}>{name}</span>
                <span>{character}</span>
            </div>
        </li>
    )
}

export default CastListItem