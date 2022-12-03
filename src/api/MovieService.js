const API_URL = process.env.REACT_APP_API_URL
const TOKEN = process.env.REACT_APP_TOKEN

class MovieService {

    static async getPopularMovies() {
        try {
            const response = await fetch(`${API_URL}/movie/popular?api_key=${TOKEN}`,
                {
                    headers: {
                        'accept': 'application/json'
                      },
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
}

export default MovieService