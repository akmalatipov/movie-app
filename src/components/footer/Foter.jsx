import React from 'react';
import { footerData } from '../../utilts/footerdata/footer';

const Foter = () => {
    return (
        <>
         <div className=' mt-16 w-full m-auto bg-slate-800 h-52 flex items-center justify-center '>
            <div className=' flex max-w-7xl w-full justify-around items-center'>
            <div className='  w-24 '>
                <img className='w-full' src='/assets/pngegg.png'/>
            </div>
            <div className='flex  gap-3'>
                {footerData.map((v,i)=>{
                    return(
                        <div key={i} className='flex cursor-pointer justify-center items-center bg-slate-800 border border-slate-600 rounded-md text-sm font-normal hover:bg-slate-600 duration-300 text-slate-300  '><span className='p-2 text-slate-500'>{v.title}</span> </div>
                    )
                })}
            </div>
            <div>
                <div> <span className=' w-12 h-12 border-[2px] rounded-full p-1 flex justify-center items-center text-white'>16+</span></div>
            </div>
            </div>
            
        </div>
        <div className='w-full m-auto bg-slate-900 h-32'>

    
        <div className=' flex justify-center items-center'>
            <div className='flex justify-center items-center mt-2'>
              <span className=' w-5 h-5 flex justify-center items-center border-[2px] rounded-full text-white pb-1'>c</span>
              <span className='text-white'>UZMOVi.com — 2019 - 2022
Manba: uzmovi.com</span>
            </div>

        </div>
        <div className='flex justify-center  mt-2 '>
        <span className='text-center  text-md  text-slate-500'>Права на фильмы принадлежат их авторам. Все фильмы представлены только для ознакомления. Администрация не несет ответственности за размещенные пользователями нелегальные материалы! Любой фильм будет удален по требованию правообладателя
Manba: uzmovi.com</span>
        </div>
      
        </div>
        </>
       
    );
};

export default Foter;