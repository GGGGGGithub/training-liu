async function m() {
  console.log(0);
  const n = await 1;  //给n赋值和输出n都在then里
  console.log(n);
}

// function m() {
//   return Promise.resolve(1).then((n) => {
//     console.log(n);
//   });
// }

m();
console.log(2);

//  funciton m(){
//    return Promise.resolve(1).then((n)=>{
//      console.log(n)
//    })
//  }
  // then 是在微队列