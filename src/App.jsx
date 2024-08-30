import React from 'react'
import "./App.css"
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart';
import ProductDetailPage from './Pages/ProductDetail/ProductDetailPage'
import {Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <div className='container'>
      <Header />
      <div className='content'>
        <div className='empty_box'></div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )

}

export default App