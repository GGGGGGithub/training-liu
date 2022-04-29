// 下面的代码会造成无限递归吗
function A() {
  setTimeout(() => {
    console.log('A');
    A();
  });
}
A();
