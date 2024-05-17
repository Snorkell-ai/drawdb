import { Validator } from "jsonschema";
import { ddbSchema, jsonSchema } from "../data/schemas";

/**
 * Checks if the provided JSON object is valid according to the JSON schema.
 * @param {Object} obj - The JSON object to be validated.
 * @returns {boolean} - Returns true if the object is valid according to the JSON schema, otherwise returns false.
 * @throws {Error} - Throws an error if there is an issue with the validation process.
 */
export function jsonDiagramIsValid(obj) {
  return new Validator().validate(obj, jsonSchema).valid;
}

/**
 * Checks if the given object is valid according to the ddbSchema.
 * @param {Object} obj - The object to be validated.
 * @throws {Error} Throws an error if validation fails.
 * @returns {boolean} Returns true if the object is valid, otherwise false.
 */
export function ddbDiagramIsValid(obj) {
  return new Validator().validate(obj, ddbSchema).valid;
}
