import css from './MovieDetailsPage.module.css'
import Loader from '../../components/Loader/Loader'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchDetails } from '../../movies-api'

const imageBaseUrl = 'https://image.tmdb.org/t/p/w500'

export default function MovieDetailsPage() {
    const [movieData, setMovieData] = useState()
    const [loading, setLoading] = useState(false)

    const { movieId } = useParams()

    useEffect(() => {
        const fetchData = async (id) => {
            try {
                setLoading(true)
                const data = await fetchDetails(id)
                setMovieData(data)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        fetchData(movieId)
    }, [])
    console.log(movieData)

    return (
        <>
            <button>← Go back</button>
            {loading && <Loader />}
        </>
    )
}