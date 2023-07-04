import React, { useState, useEffect } from 'react'
import { add } from '../store/cartSlice'
import { useDispatch,useSelector } from 'react-redux'
import { fetchProducts } from '../store/productSlice'
import { STATUS } from '../store/productSlice'
const Products = () => {
  const {data:products,status}=useSelector(state => state.product)
  // const [products, setProducts] = useState([])
  useEffect(() => {
    dispatch(fetchProducts())
    // const fetchProducts = async () => {
    //   const res = await fetch('https://fakestoreapi.com/products')
    //   const data = await res.json()
    //   console.log(data);
    //   setProducts(data)
    // }
    // fetchProducts()
  }, [])
  const dispatch = useDispatch()
  const handleAdd = (product) => {
    dispatch(add(product))
  }
  if(status==STATUS.LOADING){
    return <h1>loading....</h1>
  }if(status==STATUS.ERROR){
    return <h1>something went wrong</h1>
  }
  return (
    <div className='productWrapper'>
      {products.map((product) => {
        return (
          <div className='cardItem' key={product.id}>
            <img src={product.image} height='200px' width='200px' alt='img' />
            <h4>{product.title}</h4>
            <h3>{product.price}</h3>
            <button className='btn' onClick={() => handleAdd(product)}>Add To Cart</button>
          </div>
        )
      })}

    </div>
  )
}

export default Products