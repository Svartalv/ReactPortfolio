import { FaSpotify, FaSoundcloud, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'

const Contact = () => {
  const { language } = useLanguage()

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`
  }

  return (
    <section id="contact" className="contact-section">
      <h2>{language === 'es' ? 'CONTACTO' : 'CONTACT'}</h2>
      
      <div className="contact-content">
        <div className="contact-info-card">
          <div className="emails-section">
            <div className="email-item" onClick={() => handleEmailClick('pamelasvart@gmail.com')}>
              <span>pamelasvart@gmail.com</span>
            </div>
            <div className="email-item" onClick={() => handleEmailClick('behave.booking@gmail.com')}>
              <span>behave.booking@gmail.com</span>
            </div>
          </div>
          
          <div className="contact-social-icons">
            <a href="https://open.spotify.com/artist/2DHGsoZWpcTUcY8x6tct8n" target="_blank" rel="noreferrer" title="Spotify">
              <FaSpotify size={24} />
            </a>
            <a href="https://soundcloud.com/pamela-svart" target="_blank" rel="noreferrer" title="SoundCloud">
              <FaSoundcloud size={24} />
            </a>
            <a href="https://www.instagram.com/pamelasvart/" target="_blank" rel="noreferrer" title="Instagram">
              <FaInstagram size={24} />
            </a>
            <a href="mailto:pamelasvart@gmail.com" title="Email">
              <FaEnvelope size={24} />
            </a>
            <a href="https://ra.co/dj/pamelasvart" target="_blank" rel="noreferrer" title="Resident Advisor">
              <span style={{fontSize:16,letterSpacing:".18em"}}>RA</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

