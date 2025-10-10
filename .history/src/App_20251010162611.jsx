import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Bio from './components/Bio'
import Videos from './components/Videos'
import Parallax from './components/Parallax'
import Photos from './components/Photos'
import Events from './components/Events'
import TechRider from './components/TechRider'
import Contact from './components/Contact'
import Modal from './components/Modal'

function App() {
  const [modalImage, setModalImage] = useState(null)

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
      <Navbar />
      <Hero />
      <Bio />
      <Videos openModal={openModal} />
      <Parallax />
      <Photos openModal={openModal} />
      <Events />
      <TechRider />
      <Contact />
      <Modal modalImage={modalImage} closeModal={closeModal} />
      </div>
  )
}

export default App
