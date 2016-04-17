module.exports = e
var d = require('dot.js')

var symbols={
  '&&':(a,b)=> e(a)&&e(b),
  '||':(a,b)=> e(a)||e(b),
  '===':(a,b)=> e(a)===e(b),
  '!==':(a,b)=> e(a)!==e(b),
  '<=':(a,b)=> e(a)<=e(b),
  '>=':(a,b)=> e(a)>=e(b),
  '<':(a,b)=> e(a)<e(b),
  '>':(a,b)=> e(a)>e(b),
  '==':(a,b)=> e(a)==e(b),
  '!=':(a,b)=> e(a)!=e(b),
  '+':(a,b)=> e(a)+e(b),
  '-':(a,b)=> e(a)-e(b),
  '%':(a,b)=> e(a)%e(b),
  '*':(a,b)=> e(a)*e(b),
  '/':(a,b)=> e(a)/e(b)
}
var symbolKeys=Object.keys(symbols)

function e(s, o) {
  // remove whitespace at start and finish of statement
  s = s.replace(/^\s+|\s+$/g, '')
  // 'true' and 'false' are considered absolute
  if (s.charAt(0) == '!') return !e(s.substr(1), o)
  if (s === 'true') return true
  if (s === 'false') return false
  // Parse bracket'd content
  s = s.replace(/\(([\s\S]*)\)/g, function(a, s) {
    return e(s, o)
  })
  // Run through evals
  for (var i = 0; i < symbolKeys.length; i++) {
    if ((split = s.split(symbolKeys[i])).length > 1) {
      return symbols[symbolKeys[i]](split[0], split[1])
    }
  }

  return d(s, o) || (isNaN(Number(s)) ? s : Number(s))
}
