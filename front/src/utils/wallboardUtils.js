/**
 * Generate a hash base on a string
 * @param {string} s
 */
export const hashCode = s => s.split('').reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a }, 0)
