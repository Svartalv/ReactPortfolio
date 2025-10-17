import { useState } from 'react'
import { LanguageProvider } from './contexts/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Bio from './components/Bio'
import SoundCloudSets from './components/SoundCloudSets'
import Videos from './components/Videos'
import Photos from './components/Photos'
import Events from './components/Events'
import TechRider from './components/TechRider'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Modal from './components/Modal'

function App() {
  const [modalImage, setModalImage] = useState(null)
  const [modalImages, setModalImages] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const openModal = (src, images = [], index = 0) => {
    setModalImage(src)
    setModalImages(images)
    setCurrentIndex(index)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalImage(null)
    setModalImages([])
    setCurrentIndex(0)
    document.body.style.overflow = 'auto'
  }

  const nextImage = () => {
    if (modalImages.length > 0) {
      const nextIndex = (currentIndex + 1) % modalImages.length
      setCurrentIndex(nextIndex)
      setModalImage(modalImages[nextIndex].src)
    }
  }

  const prevImage = () => {
    if (modalImages.length > 0) {
      const prevIndex = currentIndex === 0 ? modalImages.length - 1 : currentIndex - 1
      setCurrentIndex(prevIndex)
      setModalImage(modalImages[prevIndex].src)
    }
  }

  return (
    <LanguageProvider>
      <div id="app">
        <Navbar />
        <Hero />
        <div className="section-spacer"></div>
            <Bio />
            <div className="section-spacer"></div>
            <Videos openModal={openModal} />
            <div className="section-spacer"></div>
            <SoundCloudSets />
            <div className="section-spacer"></div>
            <Events openModal={openModal} />
            <div className="section-spacer"></div>
            <Photos openModal={openModal} />
        <div className="section-spacer"></div>
        <TechRider />
        <div className="section-spacer"></div>
        <Contact />
        <Modal 
          modalImage={modalImage} 
          closeModal={closeModal} 
          nextImage={nextImage}
          prevImage={prevImage}
          hasMultipleImages={modalImages.length > 1}
        />
      </div>
    </LanguageProvider>
  )
}

export default App
