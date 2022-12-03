import React from 'react';
import './ListMovie.scss';
import ListMovieItem from './ListMovieItem/ListMovieItem';

const ListMovie = ({ movies }) => {
    return (
        <ul className="ListMovie">
            { movies?.map((i, index) => (
                <ListMovieItem
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