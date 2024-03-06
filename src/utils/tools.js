import util from "util";

/**
 * Expands and formats the given object for better readability in console output.
 * @param {Object} object - The object to be expanded and formatted.
 * @returns {string} - A formatted string representation of the object.
 */
export function expandFullObject(object) {
  return util.inspect(object, { showHidden: false, depth: null, colors: true });
}

/**
 * Checks if string parameter contains a count => [number]
 * @param {string} string
 * @returns {boolean}
 */
export function hasCount(string) {
  return /\[\d+\]$/.test(string);
}
