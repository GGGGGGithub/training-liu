const obj = {
  a: 1,
  b: 2,
  c: 3,
};
// 遍历对象的所有属性名
// for (let i in obj) {
//   console.log(i);
// }
// Object.keys(obj).forEach(function (key) {
//   console.log(key);
// });

// 遍历对象的所有属性值

// Object.values(obj).forEach(function (key) {
//   console.log(key);
// });

// 遍历对象的所有属性名和属性值
// Object.entries(obj).forEach(function ([k, v]) {
//   console.log(k, v);
// });

// 复制obj的所有属性到一个新的对象
// const newObj = {
//   ...obj
// };
// console.log(newObj)

// 复制obj除a以外的所有属性到一个新的对象


const  newObj={
  ...obj
};
delete newObj.a
// 结构出来a  剩余的所有属性放到newObj
// const { a, ...newObj } = obj;
// console.log(a, newObj);