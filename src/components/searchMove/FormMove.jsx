import React from 'react';
import {AiOutlineMail} from 'react-icons/ai'
import {IoMdStats} from 'react-icons/io'
import {AiFillExclamationCircle} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs'
const FormMove = () => {
  const navigate = useNavigate()

  const [search,setSearch] =React.useState('')

 
  const sumbitHindler = (e)=>{
    e.preventDefault()
    setSearch(e.target.value)
  
  }
    return (
      <div>
      <div className='  items-center flex justify-center max-w-7x1'>
        <div className='flex  justify-center gap-96 items-center  mt-5   w-3/4 '>
            <form onSubmit={sumbitHindler} className='flex text-center gap-4 '>
            <input 
            onChange={sumbitHindler}
            className=' bg-slate-700  text-slate-100 text-ellipsis rounded-md h-12 w-60 outline-none placeholder:text-center
             target:text-slate-50 hover:shadow-slate-400 hover:' placeholder='search' type='text'></input>
                <button className= 'text-slate-100 w-20 h-12 rounded-[4px] bg-slate-700  flex items-center justify-center ' onClick={()=>navigate((`/search?query=${search}/`))} ><BsSearch/></button>
               </form>
            <div className='  flex justify-center items-center gap-4'>
            <div className=' flex justify-center items-center w-12 h-12 bg-slate-800 rounded-lg hover:bg-slate-700  '>
            <AiOutlineMail className='text-slate-400 text-md'/>
            </div>
            <div className=' flex justify-center items-center w-12 h-12 bg-slate-800 rounded-lg hover:bg-slate-700'>
            
            </div>
            <div className=' flex justify-center items-center w-12 h-12 bg-slate-800 rounded-lg hover:bg-slate-700'>
        <IoMdStats className='text-slate-400 text-md' />
            </div>
            <div className=' flex justify-center items-center w-12 h-12  bg-slate-800 rounded-lg hover:bg-slate-700'>
          <AiFillExclamationCircle className='text-slate-400 text-md'/>
            </div>
            </div>    
        </div>
      </div>
  
      </div>
    
   
        
     
    );
};

export default FormMove;