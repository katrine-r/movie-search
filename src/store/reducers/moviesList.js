import { POPULAR_MOVIES } from '../types'
import { UPCOMING_MOVIES } from '../types'
import { NOW_PLAYING_MOVIES } from '../types'

const initialState = {
    popularMovies: [],
    upcomingMovies: [],
    nowPlayingMovies: []
}

export const moviesList = (state = initialState, { type, payload }) => {
    switch (type) {
        case POPULAR_MOVIES: 
            return {
                ...state,
                popularMovies: payload
            }
        case UPCOMING_MOVIES: 
            return {
                ...state,
                upcomingMovies: payload
            }
        case NOW_PLAYING_MOVIES: 
            return {
                ...state,
                nowPlayingMovies: payload
            }

        default:
            return state;
    }
}