import React from "react";

const FormNotes = () => {
  return (
    <form>
      <div class="mb-3">
        <label class="form-label">
          Titulo
        </label>
        <input
          type="text"
          id="txtTitulo"
          class="form-control"
          placeholder="Titulo"
        />
      </div>
      <div class="mb-3">
        <label  class="form-label">
          Descripcion
        </label>
        <textarea
          class="form-control"
          id="txtDescription"
          rows="3"
        ></textarea>
      </div>
    </form>
  );
};

export default FormNotes;
