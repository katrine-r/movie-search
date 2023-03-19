const API_URL = process.env.REACT_APP_API_URL
const TOKEN = process.env.REACT_APP_TOKEN

class MovieService {

    // MOVIES requests

    static async getPopularMovies(page) {
        try {
            const response = await fetch(`${API_URL}/movie/popular?api_key=${TOKEN}&page=${page}&language=ru-RU`,
                {
                    headers: {
                        'accept': 'application/json'
                      }
                }
            )
            const movies = await response.json()
            console.log("getPopularMovies", movies)
            return movies
        }
        catch (error) {
            console.log("Error ", error)
        }
    }

    static async getUpcomingMovies() {
        try {
            const response = await fetch(`${API_URL}/movie/upcoming?api_key=${TOKEN}&language=ru-RU`,
                {
                    headers: {
                        'accept': 'application/json' 
                    }
                }
            )

            const movies = await response.json()
            console.log("getUpcomingMovies", movies)
            return movies
        } 
        catch(error) {
            console.log("Error ", error)
        }
    }

    static async getNowPlayingMovies() {
        try {
            const response = await fetch(`${API_URL}/movie/now_playing?api_key=${TOKEN}&language=ru-RU`,
                {
                    headers: {
                        'accept': 'aplication/json'
                    }
                }
            )
            const movies = await response.json()
            console.log("getNowPlayingMovies", movies)
            return movies
        }
        catch(error) {
            console.log("Error ", error)
        }
    }

    static async getMovieById(movie_id) {
        try {
            const response = await fetch(`${API_URL}/movie/${movie_id}?api_key=${TOKEN}&language=ru-RU`,
                {
                    headers: {
                        'accept': 'application/json'
                    }
                }
            )
            const movie = await response.json()
            console.log("getMovieById", movie)
            return movie
        }
        catch(error) {
            console.log("Error ", error)
        }
    }

    static async getVideosByIdMovie(movie_id) {
        try {
            const response = await fetch(`${API_URL}/movie/${movie_id}/videos?api_key=${TOKEN}&language=ru-RU`,
                {
                    headers: {
                        'accept': 'application/json'
                    }
                }
            )
            const movie = await response.json()
            console.log("getVideosByIdMovie", movie)
            return movie
        } catch(error) {
            console.log("Error ", error)
        }
    }

    static async getActorsByIdMovie(movie_id) {
        try {
            const response = await fetch(`${API_URL}/movie/${movie_id}/credits?api_key=${TOKEN}&language=ru-RU`,
                {
                    headers: {
                        'accept': 'application/json'
                    }
                }
            )
            const movie = await response.json()
            console.log("getActorsByIdMovie", movie)
            return movie
        } catch(error) {
            console.log("Error ", error)
        }
    }

    // TV Shows requests

    static async getPopularTVShows() {
        try {
            const response = await fetch(`${API_URL}/tv/popular?api_key=${TOKEN}&language=ru-RU`,
                {
                    headers: {
                        'accept': 'application/json'
                      }
                }
            )
            const tvShows = await response.json()
            console.log("getPopularTVShows", tvShows)
            return tvShows
        }
        catch (error) {
            console.log("Error ", error)
        }
    }

    static async getTVShowById(tv_id) {
        try {
            const response = await fetch(`${API_URL}/tv/${tv_id}?api_key=${TOKEN}&language=ru-RU`,
                {
                    headers: {
                        'accept': 'application/json'
                    }
                }
            )
            const tvShow = await response.json()
            console.log("getTVShowById", tvShow)
            return tvShow
        } catch(error) {
            console.log("Error ", error)
        }
    }

    static async getVideosByIdTVShow(tv_id) {
        try {
            const response = await fetch(`${API_URL}/tv/${tv_id}/videos?api_key=${TOKEN}&language=ru-RU`,
                {
                    headers: {
                        'accept': 'application/json'
                    }
                }
            )
            const tvShow = await response.json()
            console.log("getVideosByIdTVShow", tvShow)
            return tvShow
        } catch(error) {
            console.log("Error ", error)
        }
    }

    static async getActorsByIdTVShow(tv_id) {
        try {
            const response = await fetch(`${API_URL}/tv/${tv_id}/credits?api_key=${TOKEN}&language=ru-RU`,
                {
                    headers: {
                        'accept': 'application/json'
                    }
                }
            )
            const tvShow = await response.json()
            console.log("getActorsByIdTVShow", tvShow)
            return tvShow
        } catch(error) {
            console.log("Error ", error)
        }
    }

}

export default MovieService