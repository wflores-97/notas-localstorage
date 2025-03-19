import { useState } from "react";

export const useModalNotes = (initialState=false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const openModal=()=>setIsOpen(true)
  const closeModal=()=>setIsOpen(false)

  return [isOpen,openModal, closeModal]

};
