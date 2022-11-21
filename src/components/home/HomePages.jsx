import React from 'react';
import CardMovie from '../card/CardMovie';
import Header from '../header/Header';
import Slide from '../slide/Slide';
import Footer from '../footer/Foter'
import { useGetAllMoviesQuery } from '../../redux/movies';


const HomePages = () => {
  
   const  {data,isError,isLoading,isSuccess} = useGetAllMoviesQuery()
    return (
   
           <>
           <Header/>
          <Slide/>
           <CardMovie data={data}/>
           <CardMovie data ={data}/>
           <Footer/>
           </>
            
        
    );
};

export default HomePages;