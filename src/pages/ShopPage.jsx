import React, { useState } from 'react'
import css from './ShopPage.module.css'

const ShopPage = () => {
  const [isDown, setIsDown] = useState(false)
  return (
    <main className={css.shopPage}>
      <h2>Shop All</h2>
      <div className={css.searchFn}>
        <div className={css.category}>
          <button className={css.active}>전체상품</button>
          <button>신상품(new)</button>
          <button>인기상품(top)</button>
        </div>
        <div className={`${css.sort} ${isDown ? css.active : ''}`}>
          <div className={css.sortHeader} onClick={() => setIsDown(!isDown)}>
            <p>등록순</p>
            <i className={`bi bi-chevron-${isDown ? 'up' : 'down'}`}></i>
          </div>
          <ul>
            <li>등록순</li>
            <li className={css.active}>낮은 가격순</li>
            <li>높은 가격순</li>
            <li>낮은 할인순</li>
            <li>높은 할인순</li>
          </ul>
        </div>
      </div>
      <div className={css.productList}>
        <ul className={css.list}>
          <li>상품리스트</li>
          <li>상품리스트</li>
          <li>상품리스트</li>
          <li>상품리스트</li>
          <li>상품리스트</li>
          <li>상품리스트</li>
          <li>상품리스트</li>
        </ul>
        <div className={css.paginationArea}>
          <button>
            <i className="bi bi-chevron-left"></i>
          </button>
          <button>1</button>
          <button>2</button>
          <button className={css.active}>3</button>
          <button>4</button>
          <button>5</button>
          <button>
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </main>
  )
}

export default ShopPage