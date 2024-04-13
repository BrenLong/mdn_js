const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

const myHeading2 = document.querySelector("#id2");
myHeading2.textContent = "Hello world x 2!";

/*
let myVariable = document.querySelector('#id2');

let iceCream = 'chocolate';
iceCream = 'vanilla';

if(iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');
}
else {
  alert('Aww, but chocolate is my favorite...');
}
*/

function multiply (num1, num2) {
  let result = num1*num2;
  return result;
}

function divide (num1, num2) {
  let result = num1/num2;
  return result;
}


document.querySelector("h1").addEventListener("click", function () {
  alert("what the....");
})


document.querySelector("#id2").addEventListener("click", () => {
  alert("quit it");
})
