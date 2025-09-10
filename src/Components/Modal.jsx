const Modal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="modal">
      <div className="modal-container">
        <h5>{message}</h5>
        <div className="modal-btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={onConfirm}
           
          >
            Löschen
          </button>
          <button
            type="button"
            className="btn cancel-btn"
            onClick={onCancel}
            style={{ backgroundColor: "white" }}
          >
            Abbrechen
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
