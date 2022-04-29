const a = 1;
console.log(a);

function A() {
  console.log('A');
  B();
}

function B() {
  console.log('B');
}

A();
