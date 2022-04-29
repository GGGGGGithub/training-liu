// 斐波拉契数列：1  1  2  3  5  8  13  ......
// f(n)    f(1) = 1   f(2) = 1   n>2   f(n) = f(n-1) + f(n-2)

function f(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return f(n - 1) + f(n - 2);
}

console.log(f(5));
