import css from './Loader.module.css'
import { Oval } from 'react-loader-spinner'


export default function Loader({isNotAbsolute}) {
    return (
        <Oval wrapperClass={isNotAbsolute ?  css.loader : css.loaderCentred} color='#cc002c' secondaryColor='#cc002c67'/>
    )
}