import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './Pages/Home'
import Facts from './Pages/Facts'
import About from './Pages/About'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { AnimatePresence } from 'framer-motion'

ReactDOM.render(
  <React.StrictMode>
    <AnimatePresence exitBeforeEnter>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/facts" element={<Facts />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </Router>
    </AnimatePresence>
  </React.StrictMode>,
  document.getElementById('root')
)
