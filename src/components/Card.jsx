import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useModalNotes } from "../hooks/useModalNotes";
import ModalNotes from "./ModalNotes";
import FormNotes from "./FormNotes";

function Card() {
  const [isOpenModalCard, OpenModalCard, CloseModalCard] = useModalNotes(false);

  return (
    <div className="card bg-secondary-subtle border mt-2">
      <div className="card-header text-center">Titulo</div>
      <div className="card-body">
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
      </div>
      <div className="card-footer text-body-secondary d-flex justify-content-end gap-2">
        <button className="btn btn-primary" onClick={OpenModalCard}>
          <FontAwesomeIcon icon={faFilePen} />
        </button>
        <button className="btn btn-danger">
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <ModalNotes
          isOpen={isOpenModalCard}
          closeModal={CloseModalCard}
          title="Actualizar Nota"
          btn='Actualizar'
        >
          <FormNotes />
        </ModalNotes>
      </div>
    </div>
  );
}

export default Card;
