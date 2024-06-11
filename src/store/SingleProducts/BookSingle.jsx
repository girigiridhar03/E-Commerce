import React from 'react'
import { useParams } from 'react-router-dom'
import { booksData } from '../data/books';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';


const BookSingle = () => {
    const {id} = useParams();
    let {addToCart} = useCart();
    const singleBook = booksData.find(item=>item.id === id);
  return (
    <>
    <Navbar />

    <div className='w-[100%] max-w-[1000px] mx-auto px-10 xl:px-0'>
    <div className='border-2 border-yellow-500 mt-5 p-8 rounded-lg flex flex-col items-center  gap-5 shadow-md shadow-yellow-500 md:flex-row'>
        <div>
           <img src={singleBook.image} alt="" />
        </div>
        <div className='text-yellow-500 flex flex-col gap-3'>
            <p className='text-[#ffff0070] text-[11px] md:text-[12px] xl:text-sm'>Product: {singleBook.product}</p>
            <p className='text-sm font-bold md:text-base xl:text-lg'><span className='text-red-500'>Company:</span> {singleBook.brand}</p>
            <p className='text-sm font-bold md:text-base xl:text-lg'><span className='text-red-500'>Product Descripiton:</span>{singleBook.description}</p>
            <p className='text-sm font-bold text-red-500 md:text-base xl:text-lg'><span>Prdouct Price:</span> ${singleBook.price}</p>
            <button onClick={()=>addToCart(singleBook)} className='shadow-md rounded-lg cursor-pointer px-5 py-2 block mx-auto bg-red-500 text-black font-bold'>Add Cart</button>
        </div>
    </div>
    </div>
    </>
    )
}

export default BookSingle
