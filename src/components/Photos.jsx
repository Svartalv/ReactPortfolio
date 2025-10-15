import { useLanguage } from '../contexts/LanguageContext'
import { useState } from 'react'

const Photos = ({ openModal }) => {
  const { language } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(null)
  
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

  const handleMouseEnter = (index) => {
    setActiveIndex(index)
  }

  const handleMouseLeave = () => {
    setActiveIndex(null)
  }

  const handleClick = (index) => {
    // Always open modal when clicked
    openModal(galleryImages[index].src, galleryImages, index)
  }

  return (
    <section id="photos" className="expanding-gallery-section">
      <h2>{language === 'es' ? 'Galería' : 'Gallery'}</h2>
      
      <div className="expanding-gallery-container">
        {galleryImages.map((image, index) => (
          <div 
            key={index} 
            className={`expanding-gallery-item ${activeIndex === index ? 'active' : ''} ${activeIndex !== null && activeIndex !== index ? 'inactive' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Photos

