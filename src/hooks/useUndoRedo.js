import { useContext } from "react";
import { UndoRedoContext } from "../context/UndoRedoContext";

/**
 * This function is a custom hook that provides access to the UndoRedoContext using the useContext hook.
 * @returns {Object} The UndoRedoContext object.
 * @throws {Error} Throws an error if the UndoRedoContext is not available.
 */
export default function useUndoRedo() {
  return useContext(UndoRedoContext);
}
