/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * 1. hash O(n) (in week02)
 * 2. sort O(nlogn)
 */
var isAnagram = function(s, t) {
  return s.length === t.length && [...s].sort().join('') === [...t].sort().join('')
};