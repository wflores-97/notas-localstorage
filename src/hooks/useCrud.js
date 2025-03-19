import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const useCrud = () => {
  const [newNote, setNewNote] = useState([]);

  // Cargar datos de localStorage al montar el hook
  useEffect(() => {
    const storedNotes = localStorage.getItem("Suppliers");
    if (storedNotes) {
      setNewNote(JSON.parse(storedNotes));
    }
  }, []);

  return [];
};

export default useCrud;
