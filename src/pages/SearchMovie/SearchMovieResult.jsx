import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetPostSearchMutation } from '../../redux/movies';
import {Link} from 'react-router-dom'
import Foter from '../../components/footer/Foter';

const SearchMovieResult = () => {

    const  getPatrulPath =(posterpath)=>{
        return `https://www.themoviedb.org/t/p/original${posterpath}`
          }

          
    const [ getPostSearch,{data}] = useGetPostSearchMutation()
    console.log(data);
    const location = useLocation()

    const query  = new URLSearchParams(location.search).get('query')


    useEffect(()=>{
        
        const searchMovie = async()=>{
         await (getPostSearch({query}))
        } 
        
        searchMovie()
       },[query])
    return (

      <div className=' w-full flex justify-center flex-col items-center'>

<div className=' grid grid-cols-5 gap-4  justify-center w-7xl '>
              { data?.results.map((v,i)=>(
                          
                            
                             <div className=' flex justify-center  '>
                             <Link to={`/navbar${v.id}`}>
                           <div key={i} className=' w-56 h-96 bg-slate-800 rounded mt-12 '>
                            <div className='  h-64  border-inherit relative'>
                            <div className=' z-10 w-16 h-6  absolute transition duration-700 ease-in-out  bg-red-600 rounded-r-sm flex justify-center items-center hover:bg-slate-700 text-white text-xs '><span>{v.release_date}</span></div>
                            <div className='  relative flex justify-center  h-64'>
                            <img className='  w-44  rounded-md mt-7 border-2  border-zinc-700 transition duration-700 ease-in-out hover:scale-105 hover:opacity-50 ' src={getPatrulPath(v.poster_path)} alt='img'/>
                            <div className=' w-10 h-10 flex justify-center items-center rounded-full bg-slate-800 absolute top-[90%] right-[20%]'>
                           <span className={`  border-[3px]   rounded-full w-8 h-8 flex justify-center  items-center  text-xs   `}>{v.vote_average}</span>
                           </div>
                            </div>
                         </div>
                            <div className='w-56 h-16 flex items-center justify-center transition duration-700 ease-in-out text-center  bg-slate-700 pt-3 mt-3 text-slate-500 hover:bg-slate-700 hover:text-slate-200'>
                             <span>{v.title}</span>
                            </div>
                            <div className=' transition duration-500 ease-in-out  hover:scale-105 flex items-center justify-center mt-3'>
                             <button type='button'className='bg-slate-700 w-24 h-7 text-slate-400 rounded-md text-sm font-normal hover:bg-slate-700  ' >Batafsil</button>
                            </div>
                         </div>
                         </Link>

                           
                             </div>
                           
                          
                   ))}
        </div>
        <Foter/>
      </div>
        
    );
};

export default SearchMovieResult;