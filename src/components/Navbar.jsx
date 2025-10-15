import { useState, useCallback } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, toggleLanguage } = useLanguage()

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false) // Close mobile menu when navigating
  }, [])

  const navItems = language === 'es' 
    ? [
        { id: 'home', label: 'Inicio' },
        { id: 'bio', label: 'Bio' },
        { id: 'videos', label: 'Vídeos' },
        { id: 'music', label: 'Música' },
        { id: 'photos', label: 'Fotos' },
        { id: 'events', label: 'Eventos' },
        { id: 'tech', label: 'Tech Rider' },
        { id: 'contact', label: 'Contacto' }
      ]
    : [
        { id: 'home', label: 'Home' },
        { id: 'bio', label: 'Bio' },
        { id: 'videos', label: 'Videos' },
        { id: 'music', label: 'Music' },
        { id: 'photos', label: 'Photos' },
        { id: 'events', label: 'Events' },
        { id: 'tech', label: 'Tech Rider' },
        { id: 'contact', label: 'Contact' }
      ]

  return (
    <nav className="navbar">
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
          <li className="language-toggle">
            <div className="lang-switcher">
              <button 
                onClick={() => language !== 'es' && toggleLanguage()} 
                className={`lang-btn ${language === 'es' ? 'active' : ''}`}
              >
                ESP
              </button>
              <span className="lang-separator">|</span>
              <button 
                onClick={() => language !== 'en' && toggleLanguage()} 
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              >
                ENG
              </button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

