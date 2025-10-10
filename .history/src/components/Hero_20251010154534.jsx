import { FaSpotify, FaSoundcloud, FaInstagram } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" style={{backgroundImage: "url('/assets/hero/hero-1.jpeg')"}}></div>
      <div className="floating-social-icons">
        <a href="https://open.spotify.com/artist/2DHGsoZWpcTUcY8x6tct8n" target="_blank" rel="noreferrer" title="Spotify"><FaSpotify size={20} /></a>
        <a href="https://soundcloud.com/pamela-svart" target="_blank" rel="noreferrer" title="SoundCloud"><FaSoundcloud size={20} /></a>
        <a href="https://www.instagram.com/pamelasvart/" target="_blank" rel="noreferrer" title="Instagram"><FaInstagram size={20} /></a>
        <a href="https://ra.co/dj/pamelasvart" target="_blank" rel="noreferrer" title="Resident Advisor" style={{fontSize:12,letterSpacing:".18em"}}>RA</a>
      </div>
    </section>
  )
}

export default Hero
