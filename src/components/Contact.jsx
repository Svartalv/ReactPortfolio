import { useLanguage } from '../contexts/LanguageContext'
import { useState } from 'react'

const Contact = () => {
  const { language } = useLanguage()
  const [showEmailCard, setShowEmailCard] = useState(false)

  const handleBookMeClick = () => {
    setShowEmailCard(!showEmailCard)
  }

  return (
    <section id="contact" className="contact-section">
      <h2>{language === 'es' ? 'Contacto' : 'Contact'}</h2>
      
      <div className="contact-content">
        <div className="email-section">
          <h3>{language === 'es' ? 'Email Personal' : 'Personal Email'}</h3>
          <p>pamelasvart@gmail.com</p>
        </div>
        
        <div className="behave-section">
          <h3>{language === 'es' ? 'Behave Collective' : 'Behave Collective'}</h3>
          <p>{language === 'es' ? 'Para bookings y eventos' : 'For bookings and events'}</p>
          <p>behave.booking@gmail.com</p>
        </div>
        
        <button className="book-me-button" onClick={handleBookMeClick}>
          {language === 'es' ? 'Contrátame' : 'Book Me'}
        </button>
        
        {showEmailCard && (
          <div className="email-card">
            <div className="email-card-content">
              <h4>{language === 'es' ? 'Información de Contacto' : 'Contact Information'}</h4>
              <div className="email-item">
                <strong>{language === 'es' ? 'Personal:' : 'Personal:'}</strong>
                <span>pamelasvart@gmail.com</span>
              </div>
              <div className="email-item">
                <strong>{language === 'es' ? 'Behave Collective:' : 'Behave Collective:'}</strong>
                <span>behave.booking@gmail.com</span>
              </div>
              <button className="close-card" onClick={() => setShowEmailCard(false)}>
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Contact

