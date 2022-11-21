import React from 'react';
import {motion} from 'framer-motion'
import { useRef,useState,useEffect } from 'react';
import images from '../images';
import './caruselStyle.css'


const Carusel = ({movie,setMovie}) => {
  const getPathUrl = (pathurl)=>{
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${pathurl}`
  }
 
    const [width,setWidth] =useState(0);

    const corusel = useRef()

    useEffect(()=>{
       
        setWidth(corusel.current.scrollWidth-corusel.current.offsetWidth)
    })

 
    return (
   
 <motion.div className=' corusel  mt-20 h-96 z-10 m  ml-56 mr-56 m rounded-xl '>
      <motion.div className=' overflow-hidden cursor-grab ' ref={corusel}>
        <motion.div  drag='x'dragConstraints={{right:0,left:-width}}  className='flex items-center    '>
          {movie.map(m=>{
               return(
                <motion.div  className='  flex items-center item' key={m.id}>
                    <img className='   rounded-lg h-80 w-full pointer-events-none pl-6' src={getPathUrl(m.poster_path)} alt='slide-img'/>
                   
                </motion.div>
               )

          })}
        </motion.div>
      </motion.div>
        </motion.div>
      
  
 
      
    );
};

export default Carusel;