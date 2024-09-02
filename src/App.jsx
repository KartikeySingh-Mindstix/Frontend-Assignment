import React from 'react'
import "./App.css"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './pages/Home/Home'
import CartPage from './pages/CartPage/CartPage.jsx';
import ProductDetailPage from './pages/ProductDetail/ProductDetailPage'
import Toast from './components/Toast/Toast.jsx'
import {Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <div className='container'>
      <Header />
      <div className='content'>
        <div className='empty_box'></div>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
      <Toast />
      <Footer />
    </div>
  )

}

export default App