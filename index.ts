// RxJS v6+
import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

// only output distinct values, based on the last emitted value
const source$ = from([
  { name: 'Brian' },
  { name: 'Joe' },
  { name: 'Joe' },
  { name: 'Sue' },
]);

source$
  // custom compare based on name property
  .pipe(distinctUntilKeyChanged('name'))
  // output: { name: 'Brian }, { name: 'Joe' }, { name: 'Sue' }
  .subscribe(console.log);
