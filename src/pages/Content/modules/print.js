export const printLine = (line) => {
  console.log('===> FROM THE PRINT MODULE:', line);
};

// Checking page title

console.log('hello');
//Creating Elements
var btn = document.createElement('BUTTON');
var t = document.createTextNode('CLICK ME');
btn.appendChild(t);
//Appending to DOM
document.body.appendChild(btn);
