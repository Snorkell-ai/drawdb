import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";

/**
 * Returns the NotesContext using the useContext hook.
 * 
 * @throws {Error} If NotesContext is not available.
 */
export default function useNotes() {
  return useContext(NotesContext);
}
