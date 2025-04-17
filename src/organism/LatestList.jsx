import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import css from './LatestList.module.css'
import ProductCard from '../components/ProductCard'
import { getProductsData } from '../api/productsApi'

const LatestList = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [inputValue, setInputValue] = useState(6)

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)

        const countData = await getProductsData(`category=new&_limit=${inputValue}`)
        const count = countData.length
        setProducts(new Array(count).fill(null))

        const data = await getProductsData(`category=new&_limit=${inputValue}`)
        await delay(1000)
        setProducts(data)
        setLoading(false)
      } catch (err) {
        console.log('err----', err)
        setLoading(false)
      }
    }

    if (inputValue > 0) {
      fetchProducts()
    }
  }, [inputValue])

  return (
    <section className={css.listCon}>
      <div className={css.leftCon}>
        <h2>Shop The Latest</h2>
        <div className={css.productNum}>
          <p>상품 개수</p>
          <input
            type="number"
            min="1"
            value={inputValue}
            onChange={e => {
              const value = parseInt(e.target.value)
              if (!isNaN(value) && value > 0) {
                setInputValue(value)
              }
            }}
          />
        </div>
      </div>
      <Link to={'/shop'} className={css.more}>
        View All
      </Link>
      <ul className={css.list}>
        {products.map((data, index) => (
          <li key={index}>
            <ProductCard data={data} loading={loading} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default LatestList
