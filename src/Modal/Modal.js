import './Modal.css';
import cross from '../img/cross.png';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main link">
        {children}
        <button type="button" onClick={handleClose} className='modal-close'>
        <img src={cross} alt='xmark' className='cross'/>
        {/* <FontAwesomeIcon icon={faXmark} className='xmark a'/> */}
        </button>
      </section>
    </div>
  );
};

export default Modal;