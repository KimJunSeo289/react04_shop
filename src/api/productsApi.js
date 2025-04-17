import axios from 'axios'
const BASE_URL = 'http://localhost:3000/products'

export const getProductsData = async (query = '') => {
  try {
    const res = await axios.get(`${BASE_URL}/?${query}`)
    console.log('res----', res)
    return res.data
  } catch (err) {
    console.log('err----', err)
    // throw err
  }
}
