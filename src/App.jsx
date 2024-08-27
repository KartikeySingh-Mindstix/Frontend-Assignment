import React from 'react'
import "./App.css"
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
// import DropdownMenu from './Components/Dropdown/DropdownMenu'
import Home from './Pages/Home/Home'
import {Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <div className='container'>
      <Header />
      <div className='content'>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )

}

export default App