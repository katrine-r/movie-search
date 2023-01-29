import { POPULAR_MOVIES } from '../types'
import { UPCOMING_MOVIES } from '../types'
import { NOW_PLAYING_MOVIES } from '../types'

export const getPopularMovies = payload => {
    return {
        type: POPULAR_MOVIES,
        payload
    }
}

export const getUpcomingMovies = payload => {
    return {
        type: UPCOMING_MOVIES,
        payload
    }
}

export const getNowPlayingMovies = payload => {
    return {
        type: NOW_PLAYING_MOVIES,
        payload
    }
}