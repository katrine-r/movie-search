import React from 'react';
import classes from './CastList.module.scss';
import CastListItem from './CastListItem/CastListItem';

const CastList = ({ actorsById }) => {
    return (
        <ul className={classes.CastList}>
            { actorsById?.cast?.map((i, index) => (
                <CastListItem
                    key={index}
                    character={i.character}
                    name={i.name}
                    profile_path={i.profile_path}           
                />
            )) }
        </ul>
    )
}

export default CastList