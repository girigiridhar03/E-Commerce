import React from 'react'
import FirstFiveMobiles from './FirstFiveMobiles'
import FirstFiveAc from './FirstFiveAc'
import Computers from './Computers'
import Tv from './Tv'
import Speakers from './Speakers'
import Fridge from './Fridge'
import MenFashion from './MenFashion'
import Watches from './Watches'
import Kitchen from './Kitchen'
import Women from './Women'
import Fruniture from './Fruniture'
import Books from './Books'

const Products = () => {

  return (
    <div className='px-3 py-6 flex flex-col gap-10'>
      <FirstFiveMobiles />
      <Computers />
      <Tv />
      <Speakers />
      <Fridge />
      <Kitchen />
      <Fruniture /> 
      <FirstFiveAc />
      <Watches />
      <Books />
      <MenFashion />
      <Women />
    </div>
  )
}

export default Products
