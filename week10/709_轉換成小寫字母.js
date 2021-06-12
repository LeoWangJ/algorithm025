/**
 * @param {string} s
 * @return {string}
 */
 var toLowerCase = function(s) {
  let lowerCase = ''
  for(let ch of s){
      if(ch.charCodeAt() >= 65 && ch.charCodeAt() <= 90){
          lowerCase += String.fromCharCode(ch.charCodeAt() + 32)
      }else{
          lowerCase+= ch
      }
  }
  return lowerCase
};