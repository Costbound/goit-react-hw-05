import css from './MovieList.module.css'
import { Link, useLocation } from 'react-router-dom'

export default function MovieList({ movies }) {
    const location = useLocation()
    console.log(location)

    return (
        <ul className={css.list}>
            {typeof movies === 'object' &&
                movies.map(({ title, id }) => 
                    <li key={id}>
                        <Link to={`/movies/${id}`} state={{from: location}}>{title}</Link>
                    </li>
                )
            }
        </ul>
    )
}