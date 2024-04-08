import css from './MoviesPage.module.css'
import MovieList from '../../components/MovieList/MovieList'
import Loader from '../../components/Loader/Loader'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { fetchSearchMovie } from '../../movies-api'

export default function MoviesPage() {
    const [movies, setMovies] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.currentTarget
        const searchWord = form.elements.search.value.trim()
        if (searchWord) {
            try {
                setMovies([])
                setLoading(true)
                const data = await fetchSearchMovie(searchWord)
                setMovies(data)
                navigate(`/movies?query=${searchWord}`)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        form.reset()
    }

    return (
        <div className={css.container}>
            <form className={css.form} onSubmit={handleSubmit}>
                <input className={css.input} type='text' name='search'/>
                <button type='submit'>Search</button>
            </form>
            {movies.length < 1 && !loading ?
                <h2>Any movie found by your request</h2> :
                <MovieList movies={movies} />
            }
            {loading &&<Loader isNotAbsolute={true} />}
        </div>
    )
}