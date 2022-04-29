// 下面代码的输出结果是什么

const pro=new Promise((resolve, reject) => {
  resolve();  //fuldilled undefined
})
  .then((res) => {
    console.log(res.toString()); //报错  不能读取undefined的tostring方法
    return 2; // rejected xxx
  })
  .catch((err) => {
    return 3;  //fuldilled 3
  })
  .then((res) => {
    console.log(res);  //fuldilled undeined 
  });
  setTimeout(() =>{
    console.log(pro); // undefined
  })