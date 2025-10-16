import { FaSpotify, FaSoundcloud, FaInstagram, FaEnvelope, FaYoutube } from 'react-icons/fa'
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
        <h2>{language === 'es' ? 'CONTACTO' : 'CONTACT'}</h2>
        
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
          
              <div className="contact-social-icons">
                <a href="https://www.instagram.com/pamelasvart/" target="_blank" rel="noreferrer" title="Instagram">
                  <FaInstagram size={24} />
                </a>
                <a href="https://soundcloud.com/pamela-svart" target="_blank" rel="noreferrer" title="SoundCloud">
                  <FaSoundcloud size={24} />
                </a>
                <a href="https://open.spotify.com/artist/2DHGsoZWpcTUcY8x6tct8n" target="_blank" rel="noreferrer" title="Spotify">
                  <FaSpotify size={24} />
                </a>
                <a href="https://youtube.com/playlist?list=PLjx24dXiVJAlBUiZCHuQDyEgvwzn2_ua9&si=4jhNnyUgKMwgNnR-" target="_blank" rel="noreferrer" title="YouTube">
                  <FaYoutube size={24} />
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

