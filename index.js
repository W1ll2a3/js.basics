 // This is my first javascript code!
 console.log('hello world')
 let name ='Mosh'
 console.log(name);

 let interestRate = 0.3;
 interestRate = 1;
 console.log(interestRate);

 let person = {
  name:'Mosh',
  age: 30
 };
 //Dot Notation
 person.name = 'john';
 // Bracket Notation
 let selection='name;'
 person[selection] ='mary';

 console.log(person.name);

 let selectedColors = ['red', 'blue'];
 selectedColors[2] = 1;
 console.log(selectedColors.length);

 function greet(name, lastname) {
  console.log('hello', '+ name +', '+ lastname');
 }
greet('john', 'smith');

//calculating a value
function square(number) {
  return number * number;
}

let number = square(2);
console.log(number);

function printMe() {
  console.log('printing...');
}

printMe();

function printThis(param) {
  console.log(param);
}

printThis('tapas');

const printMeAgain = function() {
  console.log('print');
}

printMeAgain();

const printMeAgainWithParam = function(a, b) {
  console.log(a,b);
}

printMeAgainWithParam(10, 20);

function sum(a, b) {
  return a + b;
}
sum(2, 3);

function calc(a, b) {
  return (2 * (a + b));
}

calc(2, 3)

function foo(bar) {
  bar();
}
foo(function() {
  console.log('bar');
})

function getCapture(camera) {
  camera();
  }

  getCapture(function(){
    console.log('canon');
  })

  function sayGreeting(name) {
  return Hello ${name};
  }

  sayGreeting('tapas');

  (function() {
    console.log('IIFE');
  })()

  function foo() {

  }

  function foo() {
    console.log('foo');
    foo();
  }

  foo();

  localStorage



  console.log('hello world');