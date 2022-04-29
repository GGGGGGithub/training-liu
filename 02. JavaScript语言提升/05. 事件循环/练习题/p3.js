// 下面代码的输出结果是什么

console.log('a');

setTimeout(() => {
  console.log('b');
}, 0);

for (let i = 0; i < 10000; i++) {
  console.log('c');
}
