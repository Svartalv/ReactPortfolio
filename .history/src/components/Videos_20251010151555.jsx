const Videos = ({ openModal }) => {
  return (
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
  )
}

export default Videos
