import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import store from '../store/store'
import { useEffect } from 'react'
// import Home from '../pages/Home'
// import Cart from '../pages/Cart'
const Navbar = () => {
  const items=useSelector((store)=>store.cart)
  useEffect(()=>{
    console.log('hello word')
    })
  return ( <div className='navbar' style={{display:'flex',justifyContent:'space-between',fontSize:'larger', fontWeight: 'bolder',margin:10, color:'purple'}}>
        <span>React Redux Store</span>
            <div style={{display:'flex', gap:30,fontStyle:'normal' }}>
            <Link className='navLink' to={'/'} >Home</Link>
            <Link className='navLink'to={'/Cart'} >Cart</Link>
            <span>Card Items : {items.length}</span>
            </div>
    </div>
  )
}

export default Navbar