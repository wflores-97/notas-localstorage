import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export function ModalNotes({ children, isOpen, closeModal, title, btn }) {
  const handleModalContainer = (e) => e.stopPropagation();

  return (
    <article className={`mymodal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="mymodal-container bg-dark text-white" onClick={handleModalContainer}>
        <button className="mymodal-close" onClick={closeModal}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        {/**Inicio Modal Header**/}
        <div className="modalHeader">
          <h3 class="modalTitle"> {title} </h3>
        </div>
        {/**Inicio Modal Body**/}
        <div className="modalBody">{children}</div>
        {/**Inicio Modal Footer**/}
        <div className="modalFooter">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            {btn}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ModalNotes;
