import React from 'react';
import classes from './ListMovies.module.scss';
import ListMoviesItem from './ListMoviesItem/ListMoviesItem';

const ListMovie = ({ movies }) => {
    return (
        <ul className={classes.ListMovies}>
            { movies?.map((i, index) => (
                <ListMoviesItem
                    key={index}
                    id={i.id}
                    title={i.title}
                    poster_path={i.poster_path}
                    release_date={i.release_date}
                    vote_average={i.vote_average}
                />
            ))}
        </ul>
    )
}

export default ListMovie