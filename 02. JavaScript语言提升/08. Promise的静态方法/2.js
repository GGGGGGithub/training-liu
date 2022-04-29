// const pro = new Promise((resolve, reject) => {
//   reject(1);
// });
// console.log(pro);

const pro = Promise.race([
  Promise.reject(1),
  Promise.reject(2),
  Promise.resolve(3),
]);
setTimeout(() => {
  console.log(pro);
}, 1000);
// pro.catch((result) => {
//   console.log('失败', result.errors);
// });


// all 一个失败 全部失败 返回失败原因  
//所有成功才成功返回数组
// eg  百米赛跑


// any 一个成功则成功 全部失败则失败