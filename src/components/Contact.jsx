import { useLanguage } from '../contexts/LanguageContext'

const Contact = () => {
  const { language } = useLanguage()

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-parallax-bg"></div>
      <div className="contact-content">
        <h2>{language === 'es' ? 'Contacto' : 'Contact'}</h2>
        
        <div className="contact-info-card">
          <div className="emails-section">
            <div className="email-item">
              <span className="email-label">{language === 'es' ? 'Reservas' : 'Bookings'}</span>
              <span>pamelasvart@gmail.com</span>
            </div>
            <div className="email-item">
              <span className="email-label">{language === 'es' ? 'Colectivo Behave' : 'Behave Collective'}</span>
              <span>behave.booking@gmail.com</span>
            </div>
          </div>
        </div>
        
        <div className="contact-signature">
          <img src="/sword-icon.svg" alt="Sword" className="contact-signature-sword-icon" />
          <span>Made by Pamela Svart • 2025</span>
        </div>
      </div>
    </section>
  )
}

export default Contact

