import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice';
const Cart = () => {
  const products = useSelector((store) => store.cart);
  console.log(products);
  const dispatch=useDispatch()
  const handleRemove=(productId)=>{
dispatch(remove(productId))
  }
  return <div>
      <h1>Cart Items</h1>
      <div >
      { products.map(product => (
        <div key={product.id} className='cardItem'>
            <img src={product.image} alt='img' height='200px' width='200px' />
            <h4>{product.title}</h4>
            <h4>{product.price}</h4>
            <button className='btn' onClick={() => handleRemove(product.id)}>Remove</button>

          </div>
      )) }
      </div>
    </div>}

export default Cart