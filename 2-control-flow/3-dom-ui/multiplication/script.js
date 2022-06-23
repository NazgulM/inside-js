import { readNumber, display } from '../../../lib/dom-io.js';

document.getElementById('product').addEventListener('click', () => {
  // debugger;

  // read user values
  const number1 = readNumber('left');
  const number2 = readNumber('right');

  const result = number1 * number2

  // display the product
  display('product', result);
});
