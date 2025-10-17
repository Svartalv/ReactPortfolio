
import { useLanguage } from '../contexts/LanguageContext'
import { useState, useEffect } from 'react'

const TechRider = () => {
  const { language } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const techSection = document.getElementById('tech')
    if (techSection) {
      observer.observe(techSection)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="tech" className="tech-section">
      <div className="tech-content">
        <h2 className={`tech-title ${isVisible ? 'animate' : ''}`}>
          {language === 'es' ? 'Tech Rider' : 'Tech Rider'}
        </h2>
        <div className="tech-category">
          <h3>{language === 'es' ? 'Equipamiento DJ' : 'DJ Equipment'}</h3>
          <ul>
            <li>3-4x CDJ-3000 or CDJ-2000NXS2</li>
            <li>1x Xone 96/92 or DJM-V10 or DJM-900NXS2</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default TechRider

