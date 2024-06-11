import React from 'react'
import { useCart } from './context/CartContext'
import Navbar from './components/Navbar';

const UseCart = () => {
    let {cartItem,deleteCartItems} = useCart();
    let Total = cartItem.reduce((preVal,currentVal)=>{
         return preVal + Math.round(currentVal.price)
    },0);
  return (
    <>
    <Navbar />
    <div className='w-[100%] max-w-[1000px] mx-auto px-10 xl:px-0 mt-5'>
      <div className='flex justify-center mb-10'>
      <h1 className='text-2xl md:text-3xl text-red-500 inline-block border-b-4 border-b-red-500 font-bold'>Cart</h1>
      </div>
      {cartItem.length === 0 ? <h1 className='text-yellow-500 text-xl md:text-2xl font-bold text-center'>Your Cart is Empty</h1> : null}
        <h1 className='text-yellow-500 text-xl md:text-2xl font-bold mt-5'>Total: <span className='text-red-500'>${Total}</span></h1>
        {cartItem.map(item=>{
            return  <div key={item.id} className='border-2 border-yellow-500 mt-5 p-8 rounded-lg flex flex-col items-center  gap-5 shadow-md shadow-yellow-500 md:flex-row'>
            <div>
             <img src={item.image} alt="" className='rounded-lg'/>
            </div>
            <div className='text-yellow-500 flex flex-col gap-3'>
                <p className='text-[#ffff0070] text-[11px] md:text-[12px] xl:text-sm'>Product: {item.product}</p>
                <p className='text-sm font-bold md:text-base xl:text-lg'><span className='text-red-500'>Company:</span> {item.company}</p>
                <p className='text-sm font-bold md:text-base xl:text-lg'><span className='text-red-500'>Product Descripiton:</span>{item.description}</p>
                <p className='text-sm font-bold text-red-500 md:text-base xl:text-lg'><span>Prdouct Price:</span> ${item.price}</p>
                <button onClick={()=>deleteCartItems(item)} className='shadow-md rounded-lg cursor-pointer px-5 py-2 block mx-auto bg-red-500 text-black font-bold'>Remove</button>
            </div>
        </div>
        })}
    </div>
    </>
  )
}

export default UseCart
