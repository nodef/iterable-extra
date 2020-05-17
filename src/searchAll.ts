import id from './_id';
import cmp from './_cmp';
import type {compareFn, mapFn} from './_types';

function* searchAllCompare<T>(x: Iterable<T>, v: T, fn: compareFn<T>=null): IterableIterator<number> {
  var fn = fn||cmp, i = -1;
  for(var u of x) {
    ++i;
    if(fn(u, v)===0) yield i;
  }
}

/**
 * Searches a value throughout.
 * @param x an iterable
 * @param v search value
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns indices of value
 */
function* searchAll<T, U=T>(x: Iterable<T>, v: T, fc: compareFn<T|U>=null, fm: mapFn<T, T|U>=null): IterableIterator<number> {
  var fc = fc||cmp, fm = fm||id;
  var v1 = fm(v, 0, null), i = -1;
  for(var u of x) {
    var u1 = fm(u, ++i, x);
    if(fc(u1, v1)===0) yield i;
  }
}
export default searchAll;
