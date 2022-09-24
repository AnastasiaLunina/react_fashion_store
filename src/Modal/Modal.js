import './Modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main link">
        {children}
        <button type="button" onClick={handleClose} className='modal-close'>
        <FontAwesomeIcon icon={faXmark} className='xmark'/>
        </button>
      </section>
    </div>
  );
};

export default Modal;