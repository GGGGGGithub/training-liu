setTimeout(() => {
  console.log(1);
}, 1000);
console.log(2);

dom.onclick = function () {
  console.log(3);
};

console.log(4);
