const reverseOf = require('array-reverseof');
function reverse(itr, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1, z00 = z0;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    z[z0++] = v;
  }
  return reverseOf(z, z00, z0);
};
module.exports = reverse;