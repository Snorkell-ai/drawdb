import { useContext } from "react";
import { TypesContext } from "../context/TypesContext";

/**
 * Returns the value of the TypesContext using the useContext hook.
 * @throws {Error} If TypesContext is not available in the component hierarchy.
 */
export default function useTypes() {
  return useContext(TypesContext);
}
