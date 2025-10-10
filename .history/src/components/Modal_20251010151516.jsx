const Modal = ({ modalImage, closeModal }) => {
  if (!modalImage) return null

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal}>&times;</button>
        <img src={modalImage} alt="Pamela Svart" className="modal-image" />
      </div>
    </div>
  )
}

export default Modal
