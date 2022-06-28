import { readString, display } from '../../../lib/dom-io.js';

document.getElementById('reverse-it').addEventListener('click', () => {
  debugger;

  // read user text
  const text = readString('user-text')
  // use a for loop that counts down (i--) to reverse the input
  let reversed = "";      
   for (var i = text.length - 1; i >= 0; i--){         
     reversed += text[i];  
   }  
    
  // display the reversed string
  display('reversed-output', reversed)
});
