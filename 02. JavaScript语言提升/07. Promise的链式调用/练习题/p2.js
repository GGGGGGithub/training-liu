// 下面代码的输出结果是什么

const pro=new Promise((resolve, reject) => {
  resolve(1); // fuldilled  1
})
  .then((res) => {
    console.log(res);
    return 2; //fuldilled  2
  })
  .catch((err) => {
    return 3; //fuldilled  2
  })
  .then((res) => {
    console.log(res); //fuldilled undefined
  });


  setTimeout(() =>{
    console.log(pro); //fuldilled undefined
  })