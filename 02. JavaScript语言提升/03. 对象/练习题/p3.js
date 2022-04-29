// 根据下面的调用和注释，完成函数 createOptions
// 设置的是新设置的 没传就使用默认值


function createOptions(options) {
  options = options || {};
  const defaultOptions = {
    time: 1000,
    speed: 50,
    text: ''
  }
  return {
    ...defaultOptions,
    ...options,  //被用户设置覆盖
  }
}

let result1, result2, result3;
result1 = createOptions(); // { time: 1000, speed: 50, text: '' }
result2 = createOptions({
  time: 500,
}); // { time: 500, speed: 50, text: '' }

result3 = createOptions({
  time: 500,
  text: 'hello world',
}); // { time: 500, speed: 50, text: 'hello world' }
console.log(result1, result2, result3, 'asdad')