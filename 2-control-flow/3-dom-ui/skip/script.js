import { readNumber, readString, display } from '../../../lib/dom-io.js';

document.getElementById('skip-them').addEventListener('click', () => {
  debugger;

  // read user values
 const text  = readString('user-text');
 const number = readNumber('skip-size');
  // create a new string with skipped characters
const text2 = 'hello';
  // display the skipped string
  display('skipped-output', text2)
});
