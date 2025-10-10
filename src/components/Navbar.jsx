import { useState, useCallback } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false) // Close mobile menu when navigating
  }, [])

  return (
    <nav className="navbar">
      <div className="nav-container">
        <button className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
        <ul className={`nav-menu ${isMobileMenuOpen ? 'nav-menu-open' : ''}`}>
          <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home') }}>Home</a></li>
          <li><a href="#bio" onClick={(e) => { e.preventDefault(); scrollToSection('bio') }}>Bio</a></li>
          <li><a href="#videos" onClick={(e) => { e.preventDefault(); scrollToSection('videos') }}>Videos</a></li>
          <li><a href="#photos" onClick={(e) => { e.preventDefault(); scrollToSection('photos') }}>Photos</a></li>
          <li><a href="#events" onClick={(e) => { e.preventDefault(); scrollToSection('events') }}>Events</a></li>
          <li><a href="#tech" onClick={(e) => { e.preventDefault(); scrollToSection('tech') }}>Tech Rider</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

