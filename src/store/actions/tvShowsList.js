import { POPULAR_TV_SHOWS } from '../types'

export const getPopularTVShows = payload => {
    return {
        type: POPULAR_TV_SHOWS,
        payload
    }
}