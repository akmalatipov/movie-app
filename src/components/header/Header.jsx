import React from 'react';
import {FaTelegramPlane} from 'react-icons/fa'
import FormMove from '../searchMove/FormMove';
import { Container } from 'react-bootstrap';

const Header = () => {
    return (
    <div className=' bg-slate-900  mt-0 h-40 flex flex-col justify-center  w-full'>
        <div className=' max-w-7x1'>
        <div className=' flex justify-center '>
            <div className=' w-3/4 rounded-2xl flex justify-center items-center bg-blue-700 h-10 gap-5 max-w-7xl'>
              
                <FaTelegramPlane className='text-white text-2xl'/>
               
                 <div className=' text-white '>Bizga telegramda qo'shiling</div>  
            </div>
          
        </div>
        <FormMove/>
        </div>
        

    </div>
  
         
   
       
      
    );
};

export default Header;