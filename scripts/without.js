function without(itr, rmv, bgn=0, end=Number.MAX_SAFE_INTEGER, z=[], z0=z.length) {
  var i = -1;
  for(var v of itr) {
    if(++i<bgn) continue;
    if(i>=end) break;
    if(!rmv.has(v)) z[z0++] = v;
  }
  return z;
};
module.exports = without;