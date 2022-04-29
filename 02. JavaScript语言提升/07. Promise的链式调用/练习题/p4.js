// 下面代码的输出结果是什么

const pro1= new Promise((resolve, reject) => {
  throw new Error(1); //rejected Error(1)
})
  .then((res) => {
    console.log(res); //rejected Error(1)  没有进行处理 则一致
    return new Error('2');
  })
  .catch((err) => {
    throw err; //rejected  new Error(1)  处理的过程中有报错 返回当前的
    return 3;
  })
  .then((res) => {
    console.log(res); //rejected Error(1)  then  不会运行
  });

setTimeout(() => {
  console.log(pro1)  
})







const pro2=  new Promise((resolve, reject) => {
    resolve(1); //fulfilled 1
  })
    .then((res) => {
      console.log(res); 
      return new Error('2'); //fulfilled Error('2')  返回抛出的错误
    })
    .catch((err) => {
      throw err; //fulfilled   Error('2') 返回上一个
      return 3;
    })
    .then((res) => {
      console.log(res); //fulfilled undefined 
    });

    setTimeout(() => {
      console.log(pro1)   // 1   Error('2') 
    })