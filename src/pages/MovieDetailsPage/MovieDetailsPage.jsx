import css from './MovieDetailsPage.module.css'
import Loader from '../../components/Loader/Loader'
import { useEffect, useState } from 'react'
import { useParams, Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { fetchDetails, imageBaseUrl } from '../../movies-api'


export default function MovieDetailsPage() {
    const [movieData, setMovieData] = useState()
    const [loading, setLoading] = useState(false)
    const { movieId } = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    const backHref = location.state.from.pathname + location.state.from.search
    console.log(backHref)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const data = await fetchDetails(movieId)
                setMovieData(data)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    console.log(location)
    return (
        <div className={css.contentContainer}>
            <button className={css.backBtn} onClick={() => {navigate(backHref)}}>← Go back</button>
            {movieData &&
                <>
                <div className={css.infoContainer}>
                    <img src={imageBaseUrl + movieData.backdrop_path} alt={movieData.title} widht='500'/>
                    <div>
                        <h2 className={css.mainTitle}>{`${movieData.title} (${movieData.release_date.slice(0, 4)})`}</h2>
                        <p className={css.para}>{`User Score: ${movieData.vote_average}`}</p>
                        <h3 className={css.title}>Overview</h3>
                        <p className={css.para}>{movieData.overview}</p>
                        <h3 className={css.title}>Genres</h3>
                        <p className={css.para}>{movieData.genres.map(genre => genre.name).join(', ')}</p>
                    </div>
                </div>
                <hr />

                <h2 className={css.additionalTitle}>Additional information</h2>
                <ul className={css.additionalList}>
                    <li>
                        <Link to='cast' state={location.state}>Cast</Link>
                    </li>
                    <li>
                        <Link to='reviews' state={location.state}>Reviews</Link>
                    </li>
                </ul>
                <hr />
                <Outlet />
                </>
            }

            {loading && <Loader />}
        </div>
    )
}