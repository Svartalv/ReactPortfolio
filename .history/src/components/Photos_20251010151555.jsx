const Photos = ({ openModal }) => {
  return (
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
  )
}

export default Photos
