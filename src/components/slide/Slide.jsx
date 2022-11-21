import React from 'react';
import { useState } from 'react';
import {IoIosArrowBack,IoIosArrowForward }  from 'react-icons/io'
import { useGetPostOrgQuery } from '../../redux/movies';
import { Link } from 'react-router-dom';

const Slide = () => {

    const {data,isError,isLoading,isSuccess}= useGetPostOrgQuery()


    
   
    const  getPatrulPath =(posterpath)=>{
        return `https://www.themoviedb.org/t/p/original${posterpath}`
          }
        

    const [slide,setSlide] =useState(0)

    const length =data?.results.length
  

    const prevSlide=()=>{
     setSlide(slide === length -1 ? 0 :+1)
    }
    const nextSlide=()=>{
        setSlide(slide===0 ?length -1: slide-1)
    }

    return (
        <div className= ' bg-gray-800  flex items-center justify-center  '>
           
            <div className='   flex items-center justify-center   py-24  max-w-7xl relative   '>
            <div onClick={prevSlide} className=' z-10 absolute top-[50%] text-white  rounded-r-md   w-8 h-12 bg-purple-700 flex justify-center items-center cursor-pointer  opacity-70 left-0' >
            <IoIosArrowBack  className=' text-white text-2xl'  />
                 </div>   
            <div onClick={nextSlide} className=' z-10 absolute top-[50%] text-white rounded-l-md  w-8 h-12  bg-purple-900 flex justify-center items-center cursor-pointer  opacity-70  right-0' > 
               <IoIosArrowForward  className=' text-white text-2xl' />
                     </div>

                 {isLoading && 'Loading...'}
                 {isError && 'Eror 404'}
                 {isSuccess && data && data?.results.map((v,i)=>{
                return(
                  
                    <Link  key={i } to={`/navbar${v.id}`}>
                   <div className={`${slide===i ? 'opacity-100 ': ' opacity-0 duration-300'}  h-[600px] max-w-7x1 duration-300  overflow-hidden object-cover flex justify-center items-center `}>
                   
                  
                 {i===slide && ( <img className=' w-full  rounded-md  ' src={getPatrulPath(v.backdrop_path)} alt='img' />)}
                
                 {/* <div className='  max-w-[60%]  flex items-center justify-center p-2 mt-96 absolute border-2 overflow-hidden'>
                    <span className='  p-[12px] pr-2 pl-2 tracking-[14px]   text-slate-100   text-7xl  border-2'>{v.title}</span>
                    </div>
                 */}
                
                </div>
                </Link>
                )
                
            })}
            </div>
         
        </div>
    );
};

export default Slide;