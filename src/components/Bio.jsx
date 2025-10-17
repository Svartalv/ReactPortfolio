import { FaSpotify, FaSoundcloud, FaInstagram, FaYoutube } from 'react-icons/fa'
import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Bio = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { language } = useLanguage()
  const bioImageRef = useRef(null)

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

  // Tilt effect for bio image while scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (bioImageRef.current) {
        const rect = bioImageRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const elementTop = rect.top
        const elementHeight = rect.height
        
        // Calculate scroll progress (0 to 1)
        const scrollProgress = Math.max(0, Math.min(1, 
          (windowHeight - elementTop) / (windowHeight + elementHeight)
        ))
        
        // Apply tilt effect (subtle 3D rotation)
        const rotateX = (scrollProgress - 0.5) * 4 // -2 to +2 degrees
        const rotateY = (scrollProgress - 0.5) * 2 // -1 to +1 degrees
        bioImageRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const paragraph1 = language === 'es' 
    ? `Pamela es una productora y DJ chilena radicada en Berlín cuyo sonido se mueve en las sombras, fusionando atmósferas oscuras y etéreas con groove pulsante y gravedad emocional. Enraizada en el lado más profundo del techno, su trabajo está moldeado por la intención y la emoción, creando viajes sónicos que invitan a una conexión profunda, tanto interna como colectiva.`
    : `Pamela is a Chilean-born producer and DJ based in Berlin whose sound moves in shadows, merging dark, ethereal atmospheres with pulsing groove and emotional gravity. Rooted in the deeper end of techno, her work is shaped by intention and emotion, creating sonic journeys that invite deep connection, both inward and collective.`

  const paragraph2 = language === 'es'
    ? `Moldeada por los paisajes emocionales de Chile, la introspección silenciosa de Escandinavia y la apertura cruda de Berlín, su sonido es una síntesis de atmósfera e instinto. Estas influencias se fusionan fluidamente, formando un lenguaje sónico que es inmersivo, contenido y emocionalmente enfocado.`
    : `Shaped by the emotional landscapes of Chile, the quiet introspection of Scandinavia, and the raw openness of Berlin, her sound is a synthesis of atmosphere and instinct. These influences merge fluidly, forming a sonic language that is immersive, restrained, and emotionally focused.`

  return (
    <section id="bio" className="bio-section">
      <div className="bio-content">
        <div className="bio-container">
          <div className="bio-image">
            <img 
              ref={bioImageRef} 
              src="/assets/bio-image.jpg" 
              alt="Pamela Svart" 
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
            />
          </div>
          <div className="bio-text-content">
            <h2 className="bio-inline-title">{language === 'es' ? 'Bio' : 'Bio'}</h2>
            <div className="bio-text">
              <div className={`paragraph-text ${isVisible ? 'animate' : ''}`}>
                {paragraph1}
              </div>
              <div className={`paragraph-text ${isVisible ? 'animate' : ''}`}>
                {paragraph2}
              </div>
            </div>
            <div className="bio-social-icons">
              <a href="https://www.instagram.com/pamelasvart/" target="_blank" rel="noreferrer" title="Instagram"><FaInstagram size={24} /></a>
              <a href="https://soundcloud.com/pamela-svart" target="_blank" rel="noreferrer" title="SoundCloud"><FaSoundcloud size={24} /></a>
              <a href="https://open.spotify.com/artist/2DHGsoZWpcTUcY8x6tct8n" target="_blank" rel="noreferrer" title="Spotify"><FaSpotify size={24} /></a>
              <a href="https://youtube.com/playlist?list=PLjx24dXiVJAlBUiZCHuQDyEgvwzn2_ua9&si=4jhNnyUgKMwgNnR-" target="_blank" rel="noreferrer" title="YouTube"><FaYoutube size={24} /></a>
              <a href="https://ra.co/dj/pamelasvart" target="_blank" rel="noreferrer" title="Resident Advisor" style={{fontSize:16,letterSpacing:".18em"}}>RA</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bio
