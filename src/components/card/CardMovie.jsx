import React from 'react';
import './cardMovieStyle.css'
import { cardData } from '../../utilts/card/cardData';
import {IoIosArrowBack,IoIosArrowForward }  from 'react-icons/io'
import { useGetAllMoviesQuery } from '../../redux/movies';
import { Link } from 'react-router-dom';


const CardMovie = ({data}) => {


   const [popular,setPoplar] = React.useState()
   const green  = '-rose-500'


  const  getPatrulPath =(posterpath)=>{
return `https://www.themoviedb.org/t/p/original${posterpath}`
  }

  const PAGE_WIDTH = 265

    const [offset,setOffset] =React.useState(0)
     
    const handleLeftClick =()=>{
      setOffset((curr)=>{
        const newCurr = curr -PAGE_WIDTH 
        // const maxOffset = -(PAGE_WIDTH *(cardData.length  -1))
        // return Math.max(newCurr,maxOffset)  
      
        return newCurr
        
      })
    }
    const handleRightClick =()=>{
      setOffset((curr)=>{
        const newCurr = curr +PAGE_WIDTH 
      
        return Math.min(newCurr ,0) 
      })
    }


    return (
        
      <>
      <div className='flex justify-center bg-slate-900 w-full  '>
              <div className='  flex justify-center movie-container max-w-7x1 '>
              <div  id ='slider'className='   flex justify-center itesm-center max-w-7xl  relative '>
                <div onClick={handleLeftClick} className=' z-10 absolute w-8 h-12 bg-violet-900 top-[50%] right-0 rounded-r-md rounded-l-sm flex justify-center items-center text-white text-lg cursor-pointer'><IoIosArrowForward/></div>
                <div onClick={handleRightClick} className=' z-10 absolute w-8 h-12 bg-violet-900 top-[50%] left-0 rounded-l-md rounded-r-sm flex justify-center items-center text-white text-lg cursor-pointer'><IoIosArrowBack/></div>
                <div className= {` flex gap-10 duration-500 overflow-hidden`}>
            

                { data?.results.map((v,i)=>(
                          
      
                 <div  key={i} style={{transform:`translateX(${offset}px)`}} className={` duration-500 flex ml-[1px]`}>
                  <Link to={`/navbar${v.id}`}>
                  <div key={i} className=' w-56 h-96 bg-slate-800 rounded mt-12 max-w-7xl '>
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
                </div>
         
         
   
</div>
            </div>

           
      </>
            
       
      
   
        
    );
};

export default CardMovie;