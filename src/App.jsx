import { useState, useEffect } from 'react'
import './styles/global.css'
import { colors } from './data'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Product from './components/Product'
import Features from './components/Features'
import Banner from './components/Banner'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Toast from './components/Toast'

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [selectedColor, setSelectedColor] = useState(0)
  const [toast, setToast] = useState(false)
  const [cart, setCart] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const addToCart = () => {
    setCart(c => c + 1)
    setToast(true)
    setTimeout(() => setToast(false), 3000)
  }

  return (
    <>
      <Navbar scrolled={scrolled} cart={cart} />
      <Hero />
      <About />
      <Product
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        colors={colors}
        addToCart={addToCart}
      />
      <Features />
      <Banner addToCart={addToCart} />
      <Testimonials />
      <Footer />
      <Toast show={toast} colorName={colors[selectedColor].name} />
    </>
  )
}
