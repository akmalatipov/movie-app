import React from 'react';
import Navbar from '../components/navbar/Navbar';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import HomePages from '../components/home/HomePages';

import MovieList from '../pages/movieList/MovieList';
import SearchMovieResult from '../pages/SearchMovie/SearchMovieResult'



const Root = () => {
    return (
       <BrowserRouter>
         <Navbar/>
       <Routes>
       <Route path='/' element={<HomePages/>}/>
     
        <Route path='/navbar:id' element ={<MovieList/>}/>
        <Route path='/search' element={<SearchMovieResult/>}/>
   
       </Routes>
       </BrowserRouter>
    );
};

export default Root;