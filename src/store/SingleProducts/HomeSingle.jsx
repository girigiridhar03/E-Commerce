import React from 'react'
import { useParams } from 'react-router-dom'
import {allProductsData} from '../data/proData'
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';

const HomeSingle = () => {
    const {model} = useParams();
    let {addToCart} = useCart();
    const singleProduct = allProductsData.find(item=>item.model === model);
  return (
    <>
    <Navbar />

    <div className='w-[100%] max-w-[1000px] mx-auto px-10 xl:px-0'>
    <div className='border-2 border-yellow-500 mt-5 p-8 rounded-lg flex flex-col items-center  gap-5 shadow-md shadow-yellow-500 md:flex-row'>
        <div>
         <img src={singleProduct.image} alt="" className='rounded-lg'/>
        </div>
        <div className='text-yellow-500 flex flex-col gap-3'>
            <p className='text-[#ffff0070] text-[11px] md:text-[12px] xl:text-sm'>Product: {singleProduct.product}</p>
            <p className='text-sm font-bold md:text-base xl:text-lg'><span className='text-red-500'>Comapany:</span> {singleProduct.brand}</p>
            <p className='text-sm font-bold md:text-base xl:text-lg'><span className='text-red-500'>Product Descripiton:</span>{singleProduct.description}</p>
            <p className='text-sm font-bold text-red-500 md:text-base xl:text-lg'><span>Prdouct Price:</span> ${singleProduct.price}</p>
            <button onClick={()=>addToCart(singleProduct)} className='shadow-md rounded-lg cursor-pointer px-5 py-2 block mx-auto bg-red-500 text-black font-bold'>Add Cart</button>
        </div>
    </div>
    </div>
    </>
  )
}

export default HomeSingle
