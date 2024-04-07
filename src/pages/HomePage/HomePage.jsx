import css from './HomePage.module.css'
import Loader from '../../components/Loader/Loader'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchTrends } from '../../movies-api'

export default function HomePage() {
    const [trends, setTrends] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const data = await fetchTrends()
                setTrends(data)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    return (
        <>
            <h2>Trending today</h2>
            <ul>
                {trends.map(({ original_title: title, id }) => (
                    <li key={id}>
                        <Link to={`/movies/${id}`}>{title}</Link>
                    </li>
                ))}
            </ul>
            {loading && <Loader />}
        </>
    )
}