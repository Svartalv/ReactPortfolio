import { useState, useEffect } from 'react'
import { FaSpotify, FaSoundcloud, FaInstagram } from 'react-icons/fa'

const Bio = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const fullText = `Pamela is a Chilean-born producer and DJ based in Berlin whose sound moves in shadows, merging dark, ethereal atmospheres with pulsing groove and emotional gravity. Rooted in the deeper end of techno, her work is shaped by intention and emotion, creating sonic journeys that invite deep connection, both inward and collective.

Shaped by the emotional landscapes of Chile, the quiet introspection of Copenhagen, and the raw openness of Berlin, her sound is a synthesis of atmosphere and instinct. These influences merge fluidly, forming a sonic language that is immersive, restrained, and emotionally focused.`

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 15) // Much faster typing speed (was 30ms)
      
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  return (
    <section id="bio" className="bio-section">
      <div className="bio-container">
        <div className="bio-image">
          <img src="/assets/bio-image.jpg" alt="Pamela Svart" />
        </div>
        <div className="bio-content">
          <h2>BIO</h2>
          <div className="bio-text">
            <div className="typewriter-text vintage-style">
              {displayedText}
              <span className="cursor vintage-cursor">|</span>
            </div>
          </div>
          <div className="bio-social-icons">
            <a href="https://open.spotify.com/artist/2DHGsoZWpcTUcY8x6tct8n" target="_blank" rel="noreferrer" title="Spotify"><FaSpotify size={24} /></a>
            <a href="https://soundcloud.com/pamela-svart" target="_blank" rel="noreferrer" title="SoundCloud"><FaSoundcloud size={24} /></a>
            <a href="https://www.instagram.com/pamelasvart/" target="_blank" rel="noreferrer" title="Instagram"><FaInstagram size={24} /></a>
            <a href="https://ra.co/dj/pamelasvart" target="_blank" rel="noreferrer" title="Resident Advisor" style={{fontSize:12,letterSpacing:".18em"}}>RA</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bio
