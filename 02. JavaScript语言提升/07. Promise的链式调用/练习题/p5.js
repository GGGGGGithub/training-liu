// 下面的代码输出什么

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 1000);
});
const promise2 = promise1.catch(() => {
  return 2;
});

console.log('promise1', promise1); //pending
console.log('promise2', promise2); //pending

setTimeout(() => {
  console.log('promise1', promise1); //rejected  undefined
  console.log('promise2', promise2);// fulfilled 2
}, 2000);
