const API_URL = process.env.REACT_APP_API_URL
const TOKEN = process.env.REACT_APP_TOKEN

class MovieService {

    // MOVIES requests

    static async getPopularMovies() {
        try {
            // const response = await fetch(`${API_URL}/movie/popular?api_key=${TOKEN}&page=${3}`,
            const response = await fetch(`${API_URL}/movie/popular?api_key=${TOKEN}&language=ru-RU`,
                {
                    headers: {
                        'accept': 'application/json'
                      }
                }
            )
            const movies = await response.json()
            console.log(movies)
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

            const movies = response.json()
            console.log("getUpcomingMovies()", movies)
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
            const movies = response.json()
            console.log("getNowPlayingMovies()", movies)
            return movies
        }
        catch(error) {
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
            console.log(tvShows)
            return tvShows
        }
        catch (error) {
            console.log("Error ", error)
        }
    }

}

export default MovieService