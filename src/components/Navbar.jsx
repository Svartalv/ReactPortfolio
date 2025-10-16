import { useState, useCallback, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const { language, toggleLanguage } = useLanguage()

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false) // Close mobile menu when navigating
  }, [])

  // Scroll detection for neon effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolling(scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

      const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'bio', label: 'Bio' },
        { id: 'videos', label: 'Videos' },
        { id: 'music', label: 'Sets' },
        { id: 'events', label: 'Events' },
        { id: 'photos', label: 'Photos' },
        { id: 'tech', label: 'Tech Rider' },
        { id: 'contact', label: 'Contact' }
      ]

  return (
    <nav className={`navbar ${isScrolling ? 'scrolling' : ''}`}>
      <div className="nav-container">
        <button className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
        <ul className={`nav-menu ${isMobileMenuOpen ? 'nav-menu-open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} onClick={(e) => { e.preventDefault(); scrollToSection(item.id) }}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="language-toggle">
          <div className="lang-switcher">
            <button 
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => language !== 'en' && toggleLanguage()}
            >
              EN
            </button>
            <span className="lang-separator">|</span>
            <button 
              className={`lang-btn ${language === 'es' ? 'active' : ''}`}
              onClick={() => language !== 'es' && toggleLanguage()}
            >
              ES
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

