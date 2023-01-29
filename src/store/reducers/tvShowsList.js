import { POPULAR_TV_SHOWS } from '../types'

const initialState = {
    popularTVShows: []
}

export const tvShowsList = (state = initialState, { type, payload }) => {
    switch (type) {
        case POPULAR_TV_SHOWS: 
            return {
                ...state,
                popularTVShows: payload
            }

        default:
            return state;
    }
}