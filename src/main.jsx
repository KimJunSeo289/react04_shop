import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Bootstrap 가져오기
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './index.css'

import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} fallbackElement={<div>로딩중...</div>} />
  </StrictMode>
)