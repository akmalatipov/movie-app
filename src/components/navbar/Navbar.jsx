import React from 'react';
import './navbarStyle.css'
import { navbarData } from '../../utilts/navbar';
import { Link } from 'react-router-dom';
import { movieSort } from '../../utilts/sort/sortMovie';
import { janreSort } from '../../utilts/sort/sortJanr';
import { useNavigate } from 'react-router-dom';
import {MdOutlineMenu} from 'react-icons/md';




const Navbar = () => {
    const [open ,setOpen] =React.useState(false)
    const [movieItemList,setMovieItemList] = React.useState([])
    const [meneOpen,setMenuOpen]=React.useState(false)
    const navigate = useNavigate()
    
    const navigte = useNavigate()
    
    const [navbarScroll,setNavbarScroll] = React.useState(false)

     const ChangenavbarSrolleHeight=()=>{
           if(window.scrollY>=80){
            setNavbarScroll(true)
           }else{
            setNavbarScroll(false)
           }

          
     }
     window.addEventListener('scroll',ChangenavbarSrolleHeight)
const [active,setActive] =React.useState()
  

const onClickLisItem = (i)=>{
    if(0===i){
       setMovieItemList(navigte('/'))
        
    }
    if(1===i){
       setMovieItemList(janreSort)
    }
    setActive(i)

   setOpen(!open)

 }

 const handleMenuOpen=()=>{
    setMenuOpen(!meneOpen)

 } 

    return (
        <div className={`${navbarScroll ? ' h-20 ':' h-16 duration-300  border-b-[1px] border-slate-400'}  ${meneOpen? 'h-52': ' h-24 '} sticy top-0 bg-slate-800 md:sticky z-20 border-slate-400`}>
            <div className={`  flex justify-center items-center  min-h-full bg-slate-800  `}>
                <nav className=' max-w-7xl  md:flex md:bg-white-900   w-full md:justify-between md:items-center pl-4 pr-4  '>
                <div className=' w-2/6 ='>
                <img onClick={()=>navigate('/')}
                 className=' w-14 hover:scale-105  cursor-pointer  duration-300' src='/assets/pngegg.png' alt="logo" />
                </div>
                  <Link to='/navbar'>Bosh sahifa</Link>
                   {navbarData.map(({title,to ,icon},i)=>{
                    return(
                        <div  onClick={()=>onClickLisItem(i)}  key={i} className={`${active ===i ? '' : ''}  flex gap-1 justify-center items-center p-7 text-slate-400  hover:bg-slate-600 duration-200 cursor-pointer` } >
                            
                             <Link onClick ={()=>onClickLisItem(i)}  className=' text-slate-400  'to={to}>{title}</Link>
                          
                             <div className={`${open===i ? 'rotate-180':''}`}>{icon}</div>
                        </div>
 
                      
                       
                    )
                   })}
                 <MdOutlineMenu onClick={handleMenuOpen} className=' text-5xl absolute top-4 right-4 hidden'/>

                </nav>
                 
         
            </div>
          
            {open&& (
            <div className='  flex items-center justify-center '>
              <div className= {`${open ?  ' duration-150 ': ' duration-400 '} rounded-lg bg-slate-600 w-full  h-20 flex items-center mt-4 justify-around max-w-7xl  `}>
              { movieItemList.map((v,index)=>{
                 return (
                           <div key={index} className='bg-slate-500  w-52 h-12 cursor-pointer flex items-center justify-center rounded-lg hover:bg-teal-700  text-gray-900 duration-200'>
                                 <div className='text-slate-300 ' >{v.movie}</div>
                           </div>

                        
                 )
              }
                  
              )}
           
            </div>
            </div>
           )}
        
        </div>
    );
};

export default Navbar;