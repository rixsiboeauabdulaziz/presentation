import React from 'react'
import { ImageCarousel } from '../components/Carousel'
import Cart from '../components/Cart'
import { SimpleCard } from '../components/Comments'

function Home() {
  return (
    <div className='dark:bg-black bg-white'>
      <ImageCarousel />
      <Cart />
      <SimpleCard />
    </div>
  )
}

export default Home