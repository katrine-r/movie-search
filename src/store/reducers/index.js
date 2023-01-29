import { combineReducers } from 'redux'
import { moviesList } from './moviesList'
import { tvShowsList } from './tvShowsList'

const rootReducer = combineReducers({
    moviesList, tvShowsList
})

export default rootReducer