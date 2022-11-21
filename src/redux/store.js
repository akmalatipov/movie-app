import {configureStore}from '@reduxjs/toolkit'
import { movieApi, orignMovieApi, rekMovieApi, searchMovieApi } from './movies'
import { infoMovieApi } from './movies'

export const store =configureStore({
    reducer: {
    [movieApi.reducerPath]:movieApi.reducer,
    [infoMovieApi.reducerPath]:infoMovieApi.reducer,
    [rekMovieApi.reducerPath]:rekMovieApi.reducer,
    [orignMovieApi.reducerPath]:orignMovieApi.reducer,
    [searchMovieApi.reducerPath]:searchMovieApi.reducer
    
    },

            middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            movieApi.middleware,
            infoMovieApi.middleware,
            rekMovieApi.middleware,
            orignMovieApi.middleware,
            searchMovieApi.middleware,

        ])
       
})



    