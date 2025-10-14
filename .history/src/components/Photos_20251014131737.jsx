const Photos = ({ openModal }) => {
  const galleryImages = [
    {
      src: '/assets/gallery/gallery 1.jpg',
      alt: 'Pamela Svart - Gallery 1'
    },
    {
      src: '/assets/gallery/gallery 2.jpg',
      alt: 'Pamela Svart - Gallery 2'
    },
    {
      src: '/assets/gallery/gallery 3.jpg',
      alt: 'Pamela Svart - Gallery 3'
    },
    {
      src: '/assets/gallery/gallery 4.jpeg',
      alt: 'Pamela Svart - Gallery 4'
    },
    {
      src: '/assets/gallery/gallery 5.jpeg',
      alt: 'Pamela Svart - Gallery 5'
    },
    {
      src: '/assets/gallery/gallery 6.jpg',
      alt: 'Pamela Svart - Gallery 6'
    },
    {
      src: '/assets/gallery/gallery 7.jpg',
      alt: 'Pamela Svart - Gallery 7'
    },
    {
      src: '/assets/gallery/gallery 8.jpeg',
      alt: 'Pamela Svart - Gallery 8'
    },
    {
      src: '/assets/gallery/gallery 9.jpg',
      alt: 'Pamela Svart - Gallery 9'
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

