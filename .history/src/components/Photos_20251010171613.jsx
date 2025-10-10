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
      src: '/assets/gallery/PAM FOTOS-33.jpeg',
      alt: 'Pamela Svart - Portrait'
    },
    {
      src: '/assets/gallery/PAM FOTOS-45.jpeg',
      alt: 'Pamela Svart - Studio'
    },
    {
      src: '/assets/gallery/Pam-photo copy.jpg',
      alt: 'Pamela Svart - Professional'
    }
  ]

  return (
    <section id="photos" className="photo-gallery-section">
      <h2>Photo Gallery</h2>
      <div className="photo-grid">
        {galleryImages.map((image, i) => (
          <div key={i} className="photo-item" onClick={() => openModal(image.src)}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Photos

