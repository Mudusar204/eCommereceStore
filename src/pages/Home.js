import React from 'react'
import Products from '../conponents/Products'

const Home = () => {
  return (
    <div className='home'>
        <h2 className='heading'>Welcome to Redux Toolkit</h2>
<section>
    <h3>Products</h3>
    <Products/>
</section>
    </div>
  )
}

export default Home