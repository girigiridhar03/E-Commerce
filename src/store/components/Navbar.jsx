import { FaShoppingCart } from "react-icons/fa";
import { NavLink , Link } from 'react-router-dom';
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const {cartItem} = useCart();
  return (
    <>
    <div className='bg-black'>
        <div className='w-[100%] max-w-[1800px] mx-auto text-white flex overflow-x-hidden items-center px-3 py-6 gap-6 sm:py-7'>
        <div className='flex-1'>
        <NavLink to="/">
      <h1 className='text-md flex flex-col  text-yellow-500 sm:text-2xl font-bold sm:flex-row sm:gap-3'>Naruto's <span className='text-red-500'>Electronics</span></h1>
        </NavLink>
        </div>
      <div className='w-[90%]'>
        <input type="text" placeholder='Search here....' className='text-sm bg-transparent border-2 border-yellow-500 px-1 w-[100%] outline-none sm:py-1'  />
      </div>
      <Link to={`/cart`}>
       <div className='flex-1 flex justify-end relative'>
          <h5 className='flex items-center gap-1 text-md font-bold text-yellow-500  sm:text-2xl'>Cart <span className='text-red-500'><FaShoppingCart className='hidden sm:block '/><h1 className='block sm:hidden'>{cartItem.length}</h1></span></h5>
          <div className='bg-yellow-500 absolute h-[13px] w-[13px] rounded-full top-[-1px] right-[-5px] hidden sm:flex items-center justify-center text-[13px] text-black font-bold'>{cartItem.length}</div>
       </div>
      </Link>
        </div>
    </div>


    <div className='bg-yellow-600 w-[100%]'>
        <ul className='w-[100%] max-w-[1800px] mx-auto flex justify-between px-3 py-3 text-[8px] sm:text-md md:text-[15px] lg:text-lg font-bold cursor-pointer text-red-black items-center'>
          <NavLink to="/">
            <li className='border-b-[1px] border-black'>Home</li>
          </NavLink>


          
          <NavLink to="/mobile">
          <li className='border-b-[1px] border-black'>Mobile</li>
          </NavLink>

          <NavLink to="/computer" >
          <li  className='border-b-[1px] border-black'>Computer</li>
          </NavLink>
        
          <NavLink to="/fridge">
          <li className='border-b-[1px] border-black'>Fridge</li>
          </NavLink>

          <NavLink to="/fruniture">
          <li className='border-b-[1px] border-black'>Furniture</li>
          </NavLink>

          <NavLink to="/kitchen">
          <li className='border-b-[1px] border-black'>Kitchen</li>
          </NavLink>

          <NavLink to="/men">
          <li className='border-b-[1px] border-black'>Men</li>
          </NavLink>

          <NavLink to="/speakers">
          <li className='border-b-[1px] border-black'>Speakers</li>
          </NavLink>


           <NavLink to="/televisions">
          <li className='border-b-[1px] border-black'>Tv</li>
           </NavLink>

           <NavLink to="/watches">
          <li className='border-b-[1px] border-black'>Watch</li>
           </NavLink>

           <NavLink to="/women">
          <li className='border-b-[1px] border-black '>Woman</li>
           </NavLink>

           <NavLink to="/books">
          <li className='border-b-[1px] border-black'>Books</li>
           </NavLink>

        
 
        </ul>
    </div>
    </>
  )
}

export default Navbar
