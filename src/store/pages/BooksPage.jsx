import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import {booksData} from '../data/books'
import { Link } from 'react-router-dom'

const BooksPage = () => {
  let[selectedBox , setSelectedBox] = useState([]);

  const handleOnChange = (val)=>{
   
      if(selectedBox.includes(val)){
        setSelectedBox(selectedBox.filter(item => item !== val))
        }
        else{
          setSelectedBox([...selectedBox,val]);
        
      }
  }

  const filterProduct = selectedBox.length === 0 ? booksData : booksData.filter(item=>selectedBox.includes(item.title));
  

  return (
    <>
      <Navbar /> 
        
     <div className='w-[100%] max-w-[1800px] mx-auto mt-4'>

<div>

<div className='flex p-5'>

<div className='h-[600px] w-[40%] md:w-[30%] border-2 border-red-500 rounded-lg mt-2 py-3 px-2'>
  <div className='flex justify-center'>
 <h4 className='text-yellow-500 text-sm md:text-lg mb-2 font-bold  border-b-2 inline-block border-red-500'>FILTER</h4>
  </div>
  {booksData.map(item=>{
    return <div key={item.image} className='mt-2'>
        <label className='text-yellow-500 flex items-center gap-5 font-bold text-sm md:text-lg'>
          <input type="checkbox" checked = {selectedBox.includes(item.title)} onChange={()=>handleOnChange(item.title)}/>
        {item.title}
        </label>
    </div>
  })}
</div>

 <div className='flex gap-3 px-4 py-2 text-red-500 xl:justify-between flex-wrap w-[60%] md:w-[70%]'>
  <div className='w-[100%] flex flex-wrap gap-5'>
 {filterProduct.map(item=>{
     return <div key={item.id} className='flex border-2 border-yellow-500 overflow-hidden flex-col p-1 group rounded-lg lg:p-3 w-[100%] md:w-[30%]'>
      <Link to={`/books/${item.id}`}>
        <div className='w-[100%] overflow-hidden'>
         <img src={item.image} alt="" className='rounded-lg w-[100%] group-hover:scale-95 transition ease-in-out cursor-pointer'/>
        </div>
      </Link>
        <div className='text-[10px] px-2 py-2 font-bold sm:text-sm lg:text-lg'>
             <p>{item.product}</p>
             <p>{item.title}</p>
             <p>$.{item.price}</p>
        </div>
     </div>
 })}
    
  </div>
 </div>

</div>

</div>
</div>
    </>
  )
}

export default BooksPage
