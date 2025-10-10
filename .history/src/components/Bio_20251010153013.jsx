import { FaSpotify, FaSoundcloud, FaInstagram } from 'react-icons/fa'

const Bio = () => {
  return (
    <section id="bio" className="bio-section">
      <div className="bio-container">
        <div className="bio-image">
          <img src="/assets/bio-image.jpg" alt="Pamela Svart" />
        </div>
        <div className="bio-content">
          <h2>BIO</h2>
          <div className="bio-text">
            <p>
              Pamela is a Chilean-born producer and DJ based in Berlin whose sound moves in shadows, 
              merging dark, ethereal atmospheres with pulsing groove and emotional gravity. Rooted in 
              the deeper end of techno, her work is shaped by intention and emotion, creating sonic 
              journeys that invite deep connection, both inward and collective.
            </p>
            <p>
              Shaped by the emotional landscapes of Chile, the quiet introspection of Copenhagen, and the 
              raw openness of Berlin, her sound is a synthesis of atmosphere and instinct. These influences 
              merge fluidly, forming a sonic language that is immersive, restrained, and emotionally focused.
            </p>
          </div>
          <div className="music-curation">
            <h3>Music Curation:</h3>
            <p>Techno, Deep Techno, Hardgroove, Groovy Techno, Raw, Trance, Experimental, Trippy Techno, House, EBM, Acid</p>
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
