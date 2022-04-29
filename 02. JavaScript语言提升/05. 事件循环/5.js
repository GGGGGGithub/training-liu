setTimeout(() => {
  console.log(1);
}, 0);
const start = Date.now();
while (Date.now() - start < 1000) {}

console.log(2);
