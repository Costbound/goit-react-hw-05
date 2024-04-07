import './App.module.css'
import Navigation from '../Navigation/Navigation'
import Loader from '../Loader/Loader'
import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'))
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'))
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'))
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage/MovieDetailsPage'))

export default function App() {


    return (
        <div className="content-container">
            <Navigation />

            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/movies' element={<MoviesPage />} />
                    <Route path='/movies/:movieId' element={<MovieDetailsPage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </div>
    )
}