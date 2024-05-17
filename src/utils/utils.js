/**
 * Converts a data URI to a Blob object.
 * @param {string} dataUrl - The data URI to be converted to a Blob.
 * @throws {Error} If the dataUrl is not a valid data URI.
 * @returns {Blob} A Blob object converted from the data URI.
 */
export function dataURItoBlob(dataUrl) {
  const byteString = atob(dataUrl.split(",")[1]);
  const mimeString = dataUrl.split(",")[0].split(":")[1].split(";")[0];
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const intArray = new Uint8Array(arrayBuffer);

  for (let i = 0; i < byteString.length; i++) {
    intArray[i] = byteString.charCodeAt(i);
  }

  return new Blob([intArray], { type: mimeString });
}

/**
 * Compares two arrays to check if they are equal.
 * @param {Array} arr1 - The first array to be compared.
 * @param {Array} arr2 - The second array to be compared.
 * @returns {boolean} - Returns true if the arrays are equal, otherwise false.
 * @throws {TypeError} - If either arr1 or arr2 is not an array.
 */
export function arrayIsEqual(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

/**
 * Check if a string has quotes at the beginning and end.
 * @param {string} str - The input string to check for quotes.
 * @throws {Error} If the input string is less than 2 characters long.
 * @returns {boolean} True if the string has quotes at the beginning and end, false otherwise.
 */
export function strHasQuotes(str) {
  if (str.length < 2) return false;

  return (
    (str[0] === str[str.length - 1] && str[0] === "'") ||
    (str[0] === str[str.length - 1] && str[0] === '"') ||
    (str[0] === str[str.length - 1] && str[0] === "`")
  );
}

const keywords = ["CURRENT_TIMESTAMP", "NULL"];

/**
 * Checks if the given string is a keyword.
 * @param {string} str - The string to be checked.
 * @returns {boolean} - Returns true if the string is a keyword, otherwise false.
 * @throws {Error} - Throws an error if the input is not a string.
 */
export function isKeyword(str) {
  return keywords.includes(str.toUpperCase());
}

/**
 * Checks if the given string represents a function.
 * @param {string} str - The string to be checked.
 * @returns {boolean} - Returns true if the string represents a function, otherwise false.
 * @throws {Error} - Throws an error if the input is not a string.
 */
export function isFunction(str) {
  return /\w+\([^)]*\)$/.test(str);
}
