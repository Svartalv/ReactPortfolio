const Photos = ({ openModal }) => {
  const galleryImages = [
    {
      src: '/assets/gallery/DSC02403.jpg',
      alt: 'Pamela Svart - Performance'
    },
    {
      src: '/assets/gallery/DSC02459.jpg',
      alt: 'Pamela Svart - DJ Set'
    },
    {
      src: '/assets/gallery/PAM FOTOS-21.jpeg',
      alt: 'Pamela Svart - Portrait'
    },
    {
      src: '/assets/gallery/PAM FOTOS-33.jpeg',
      alt: 'Pamela Svart - Portrait'
    },
    {
      src: '/assets/gallery/PAM FOTOS-45.jpeg',
      alt: 'Pamela Svart - Studio'
    },
    {
      src: '/assets/gallery/PAM FOTOS-58.jpg',
      alt: 'Pamela Svart - Professional'
    },
    {
      src: '/assets/gallery/Pam-photo copy.jpg',
      alt: 'Pamela Svart - Professional'
    },
    {
      src: '/assets/gallery/SAV09219.jpg',
      alt: 'Pamela Svart - Event'
    }
  ]

  return (
    <section id="photos" className="cinematic-gallery-section">
      <div className="gallery-header">
        <h2>GALLERY</h2>
      </div>
      
      <div className="cinematic-grid">
        {galleryImages.map((image, i) => (
          <div key={i} className="cinematic-photo" onClick={() => openModal(image.src)}>
            <div className="photo-container">
              <img src={image.src} alt={image.alt} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Photos

