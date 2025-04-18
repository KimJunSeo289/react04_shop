import React from 'react'
import { useLoaderData } from 'react-router-dom'
import css from './CartPage.module.css'
import { formatCurrency } from '../utils/features'

const CartPage = () => {
  const cartList = useLoaderData()
  console.log('cartList', cartList)
  return (
    <main>
      <h2>장바구니</h2>
      {cartList.cartItems.map(product => (
        <div className={css.cartProductCon}>
          <img src={`/public/img/${product.img}`}></img>
          <p>{product.title}</p>
          <p>{product.count}개</p>
          <p>총 가격 : {formatCurrency(product.price * product.count)}</p>
          <i class="bi bi-trash3-fill"></i>
        </div>
      ))}
    </main>
  )
}

export default CartPage
