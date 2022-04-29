/**
 * 创建一个用户对象
 * 对象格式：
 * {
 *    firstName: xxx,
 *    lastName: xxx,
 *    fullName: xxx,
 *    sayHello: fn
 * }
 */
// 速写
function createUser(firstName, lastName) {
    return{
        firstName,
        lastName,
        fullName:`${firstName}${lastName}`
    }
}

// 调用createUser函数，使用解构得到fullName
const {fullName}=createUser('邓','佳') 
// 返回对象
// const { fullName } =createUser('邓','佳')

console.log(fullName)