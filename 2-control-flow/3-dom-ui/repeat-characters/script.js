import { readNumber, readString, display } from '../../../lib/dom-io.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;

  // read user values
const text = readString('user-text');
const number = readNumber('number-of-times');
  // repeat the characters in the text
let multistr = ''
  for (let i =0; i < number; i++) {
    for (let j = 0; j < text.length; j++) {
      multistr += text[j];
    }
  }

  // display the text with repeated characters
  display('repeated-output', multistr);
});
