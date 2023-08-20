// RxJS v6+
import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/filtering/distinctuntilkeychanged
// Example 1: Compare based on key
// only output distinct values, based on the last emitted value
const source$ = from([
  { name: 'Brian' },
  { name: 'Brian' },
  { name: 'Sue' },
  { name: 'Sue' },
  { name: 'Leo+' },
  { name: 'Leo+' },
  { name: 'Joe' },
  { name: 'Leo' },
]);

// custom compare based on name property
source$.pipe(distinctUntilKeyChanged('name')).subscribe(console.log);
// output: { name: 'Brian }, { name: 'Joe' }, { name: 'Sue' }
