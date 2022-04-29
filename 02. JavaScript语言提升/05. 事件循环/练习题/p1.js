// 下面的哪个函数执行会导致报错？如果报错，会报什么错误？为什么会出现这种情况？

function A() {
  A();
}

function B() {
  var n = 0;
  while (n > 0) {
    n++;
  }
}
