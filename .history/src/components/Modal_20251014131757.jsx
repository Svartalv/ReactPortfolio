const Modal = ({ modalImage, closeModal, nextImage, prevImage, hasMultipleImages }) => {
  if (!modalImage) return null

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeModal()
    if (e.key === 'ArrowRight' && hasMultipleImages) nextImage()
    if (e.key === 'ArrowLeft' && hasMultipleImages) prevImage()
  }

  return (
    <div 
      className="modal-overlay" 
      onClick={closeModal}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal}>&times;</button>
        
        {hasMultipleImages && (
          <button className="modal-nav modal-prev" onClick={prevImage}>
            &#8249;
          </button>
        )}
        
        <img src={modalImage} alt="Pamela Svart" className="modal-image" />
        
        {hasMultipleImages && (
          <button className="modal-nav modal-next" onClick={nextImage}>
            &#8250;
          </button>
        )}
      </div>
    </div>
  )
}

export default Modal

