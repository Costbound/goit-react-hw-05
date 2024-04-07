import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
axios.defaults.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTE3Y2FmYmM1M2NmNjE0OTdhZDIzYWE3MDA1ZWFiMCIsInN1YiI6IjY2MTJkNDkzMWZhMWM4MDE0OWQxYWFmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fw23VSEg3ZYUrHcdtG5V67yM59pTD68xZKn0QhObdYg'

export const fetchTrends = async () => {
    const resp = await axios.get('/trending/movie/day')
    return resp.data.results
}

export const fetchDetails = async (id) => {
    const resp = await axios.get(`/movie/${id}`)
    return resp.data
}
