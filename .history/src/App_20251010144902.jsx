import { useState, useCallback } from 'react'
import { FaSpotify, FaSoundcloud, FaInstagram } from 'react-icons/fa'

function App() {
  const [modalImage, setModalImage] = useState(null)

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const openModal = (src) => {
    setModalImage(src)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalImage(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <div id="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <ul>
          <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home') }}>Home</a></li>
          <li><a href="#bio" onClick={(e) => { e.preventDefault(); scrollToSection('bio') }}>Bio</a></li>
          <li><a href="#videos" onClick={(e) => { e.preventDefault(); scrollToSection('videos') }}>Videos</a></li>
          <li><a href="#photos" onClick={(e) => { e.preventDefault(); scrollToSection('photos') }}>Photos</a></li>
          <li><a href="#events" onClick={(e) => { e.preventDefault(); scrollToSection('events') }}>Events</a></li>
          <li><a href="#tech" onClick={(e) => { e.preventDefault(); scrollToSection('tech') }}>Tech Rider</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="home" className="hero" style={{backgroundImage: "url('/assets/hero/hero-1.jpeg')"}}>
        <div className="social-icons">
          <a href="https://open.spotify.com/artist/2DHGsoZWpcTUcY8x6tct8n" target="_blank" rel="noreferrer" title="Spotify"><FaSpotify size={22} /></a>
          <a href="https://soundcloud.com/pamela-svart" target="_blank" rel="noreferrer" title="SoundCloud"><FaSoundcloud size={22} /></a>
          <a href="https://www.instagram.com/pamelasvart/" target="_blank" rel="noreferrer" title="Instagram"><FaInstagram size={22} /></a>
          <a href="https://ra.co/dj/pamelasvart" target="_blank" rel="noreferrer" title="Resident Advisor" style={{fontSize:12,letterSpacing:".18em"}}>RA</a>
        </div>
      </section>

      {/* BIO */}
      <section id="bio" className="bio-section">
        <h2>Bio</h2>
        <p>
          Pamela is a Chilean-born producer and DJ based in Berlin whose sound moves in shadows, 
          merging dark, ethereal atmospheres with pulsing groove and emotional gravity. Rooted in 
          the deeper end of techno, her work is shaped by intention and emotion, creating sonic 
          journeys that invite deep connection, both inward and collective.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Shaped by the emotional landscapes of Chile, the quiet introspection of Copenhagen, and the 
          raw openness of Berlin, her sound is a synthesis of atmosphere and instinct. These influences 
          merge fluidly, forming a sonic language that is immersive, restrained, and emotionally focused.
        </p>
      </section>

      {/* VIDEOS */}
      <section id="videos" className="gallery-section">
        <h2>Video Gallery</h2>
        <div className="video-gallery">
          <div className="video-item featured">
            <div className="video-thumbnail">
              <iframe
                src="https://www.youtube.com/embed/UPMVv5elCls?modestbranding=1&rel=0&showinfo=0"
                title="HÖR Berlin - Latest Set"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="video-info">
              <h3>HÖR Berlin - Latest Set</h3>
              <p>Latest performance at HÖR Berlin</p>
            </div>
          </div>

          <div className="video-item">
            <div className="video-thumbnail">
              <iframe
                src="https://www.youtube.com/embed/m7WoV6CYoUI?start=3308&modestbranding=1&rel=0&showinfo=0"
                title="Hand of Blood - Techno Freitag"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="video-info">
              <h3>Hand of Blood - Techno Freitag</h3>
              <p>Berlin performance</p>
            </div>
          </div>

          <div className="video-item">
            <div className="video-thumbnail">
              <iframe
                src="https://www.youtube.com/embed/Mid2HTmAWl8?start=3&modestbranding=1&rel=0&showinfo=0"
                title="HÖR Berlin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="video-info">
              <h3>HÖR Berlin</h3>
              <p>Previous HÖR performance</p>
            </div>
          </div>

          <div className="video-item">
            <div className="video-thumbnail" onClick={() => openModal('/assets/bio-image.jpg')}>
              <img src="/assets/bio-image.jpg" alt="Pamela Svart Bio" style={{width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer'}} />
            </div>
            <div className="video-info">
              <h3>Bio Image</h3>
              <p>Click to view full image</p>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTOS (single repeated image, click to enlarge) */}
      <section id="photos" className="photo-gallery-section">
        <h2>Photo Gallery</h2>
        <div className="photo-grid">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="photo-item" onClick={() => openModal('/assets/bio-image.jpg')}>
              <img src="/assets/bio-image.jpg" alt="Pamela Svart" />
            </div>
          ))}
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="events-section">
        <h2>Latest Events & Gigs</h2>
        <div className="ra-integration">
          <div className="ra-profile">
            <h3>Resident Advisor</h3>
            <p className="ra-text">Follow on Resident Advisor for the latest events and bookings:</p>
            <a className="ra-link" href="https://ra.co/dj/pamelasvart" target="_blank" rel="noreferrer">View Full Profile</a>
          </div>
          <div className="recent-events">
            <h3>Upcoming Events 2025</h3>
            <div className="event-list">
              <div className="event-item">
                <div className="event-date">Aug 17, 2025</div>
                <div className="event-details">
                  <h4>MIAW: Pride After Party</h4>
                  <p>Jolene, Copenhagen - Denmark</p>
                  <span className="event-type">Club Night</span>
                </div>
              </div>
              <div className="event-item">
                <div className="event-date">Aug 11, 2025</div>
                <div className="event-details">
                  <h4>SINGULARITY</h4>
                  <p>Tresor, Berlin - Germany</p>
                  <span className="event-type">Club Night</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3>Past Events 2024</h3>
        <ul className="events-list past">
          <li><strong>Nov 28, 2024:</strong> HÖR Berlin, Berlin - Germany</li>
          <li><strong>Sep 30, 2024:</strong> SINGULARITY, Watergate, Berlin - Germany</li>
        </ul>
      </section>

      {/* TECH RIDER */}
      <section id="tech" className="tech-section">
        <h2>Tech Rider</h2>
        <div className="tech-content">
          <div className="tech-category">
            <h3>DJ Equipment</h3>
            <ul>
              <li>3-4x CDJ-3000 or CDJ-2000NXS2</li>
              <li>1x Xone 96/92 or DJM-V10 or DJM-900NXS2</li>
              <li>1x Headphones (Sennheiser HD-25 or similar)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <h2>Contact</h2>
        <p>pamelasvart@gmail.com</p>
      </section>

      {/* MODAL */}
      {modalImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <img src={modalImage} alt="Pamela Svart" className="modal-image" />
          </div>
      </div>
      )}
      </div>
  )
}

export default App
