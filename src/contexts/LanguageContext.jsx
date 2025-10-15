import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  // Detect language from URL or default to English
  const getInitialLanguage = () => {
    const path = window.location.pathname
    if (path.startsWith('/esp') || path.startsWith('/es')) return 'es'
    if (path.startsWith('/en')) return 'en'
    return 'en' // Default to English
  }

  const [language, setLanguage] = useState(getInitialLanguage)

  const toggleLanguage = () => {
    const newLanguage = language === 'es' ? 'en' : 'es'
    setLanguage(newLanguage)
    
    // Update URL without page reload
    const newPath = newLanguage === 'es' ? '/esp' : '/en'
    window.history.pushState({}, '', newPath)
  }

  // Update URL when language changes
  useEffect(() => {
    const currentPath = window.location.pathname
    const expectedPath = language === 'es' ? '/esp' : '/en'
    
    if (currentPath !== expectedPath) {
      window.history.pushState({}, '', expectedPath)
    }
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
