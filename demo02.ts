//函数声明法
function add1(n1:number,n2:number):number{
    return n1+n2
}
console.log(add1(0,2))

//函数表达式法（将一个函数赋值给一个变量）
var add2 = function (n1:number,n2:number):number {
    return n1+n2
}
console.log(add2(1,2))

//箭头函数，ts完全支持es6语法
var add3=(n1:number,n2:number):number=>{
    return n1+n2
}
console.log(add3(2,2))

