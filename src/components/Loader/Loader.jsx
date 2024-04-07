import css from './Loader.module.css'
import { BallTriangle } from 'react-loader-spinner'


export default function Loader() {
    return (
        <BallTriangle wrapperClass={css.loader} color='#cc002c'/>
    )
}