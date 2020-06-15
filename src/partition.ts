import type {testFn} from './_types';

/**
 * Segregates values by test result.
 * @param x an iterable
 * @param fn test function (v, i, x)
 * @returns [satisfies, doesnt]
 */
function partition<T>(x: Iterable<T>, fn: testFn<T>): [T[], T[]] {
  var t: T[] = [], f: T[] = [], i = -1;
  for(var v of x) {
    if(fn(v, ++i, x)) t.push(v);
    else f.push(v);
  }
  return [t, f];
}
export default partition;
