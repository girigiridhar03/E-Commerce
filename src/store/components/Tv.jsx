import React from 'react'
import {tvData} from "../data/tv";
import { Link } from 'react-router-dom';
const Tv = () => {
    const firstFiveTv = tvData.slice(0,5);
    
    return (
      <div className='w-[100%] max-w-[1800px] mx-auto'>
      <div>
       <h1 className='text-lg font-bold text-yellow-500 lg:text-2xl'>Television's</h1>
       
       <div className='flex gap-3 px-4 py-2 text-red-500 xl:justify-between'>
       {firstFiveTv.map(item=>{
           return <div key={item.id} className='flex border-2 border-yellow-500 overflow-hidden flex-col p-1 group rounded-lg lg:p-3'>
               <Link to={`/${item.model}`}>
            <div className='w-[100%] overflow-hidden'>
             <img src={item.image} alt="" className='rounded-lg w-[100%]  group-hover:scale-95 transition ease-in-out cursor-pointer'/>
            </div>
            </Link>
              <div className='text-[10px] md:px-2 py-2 font-bold sm:text-sm lg:text-lg'>
                   <p>{item.product}</p>
                   <p>{item.company}</p>
                   <p>$.{item.price}</p>
              </div>
           </div>
       })}
       </div>
  
      </div>
    </div>
    )
}

export default Tv
