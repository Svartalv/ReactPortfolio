import { FaSpotify, FaSoundcloud, FaInstagram } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Bio = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const bioSection = document.getElementById('bio')
    if (bioSection) {
      observer.observe(bioSection)
    }

    return () => observer.disconnect()
  }, [])

  const paragraph1 = `Pamela is a Chilean-born producer and DJ based in Berlin whose sound moves in shadows, merging dark, ethereal atmospheres with pulsing groove and emotional gravity. Rooted in the deeper end of techno, her work is shaped by intention and emotion, creating sonic journeys that invite deep connection, both inward and collective.`

  const paragraph2 = `Shaped by the emotional landscapes of Chile, the quiet introspection of Copenhagen, and the raw openness of Berlin, her sound is a synthesis of atmosphere and instinct. These influences merge fluidly, forming a sonic language that is immersive, restrained, and emotionally focused.`

  return (
    <section id="bio" className="bio-section">
      <div className="bio-container">
        <div className="bio-image">
          <img src="/assets/bio-image.jpg" alt="Pamela Svart" />
        </div>
        <div className="bio-content">
              <h2 className={isVisible ? 'animate' : ''}>{language === 'es' ? 'BIO' : 'BIO'}</h2>
          <div className="bio-text">
            <div className={`paragraph-text ${isVisible ? 'animate' : ''}`}>
              {paragraph1}
            </div>
            <div className={`paragraph-text ${isVisible ? 'animate' : ''}`}>
              {paragraph2}
            </div>
          </div>
          <div className="bio-social-icons">
            <a href="https://open.spotify.com/artist/2DHGsoZWpcTUcY8x6tct8n" target="_blank" rel="noreferrer" title="Spotify"><FaSpotify size={24} /></a>
            <a href="https://soundcloud.com/pamela-svart" target="_blank" rel="noreferrer" title="SoundCloud"><FaSoundcloud size={24} /></a>
            <a href="https://www.instagram.com/pamelasvart/" target="_blank" rel="noreferrer" title="Instagram"><FaInstagram size={24} /></a>
            <a href="https://ra.co/dj/pamelasvart" target="_blank" rel="noreferrer" title="Resident Advisor" style={{fontSize:16,letterSpacing:".18em"}}>RA</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bio
