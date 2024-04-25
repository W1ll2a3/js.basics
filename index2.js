
console.log('hello world');
// factory function
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function() {
    console.log('draw');
  }
};

circle.draw();

function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log('draw');
    }
  };
}

const circle = createCircle(1);

// constructor function
function Circle(radius) {
  console.log('this',this);
  this.radius = radius;
  this.draw = function() {
    console.log('draw')
  }
}
const another = new Circle(1);

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

const Circle1

const another = new Circle(1);

let x = 10;
let y = x;

x = 20;


let number = 10;

function increase(number) {
  number++;
}

increase(number);
console.log(number);