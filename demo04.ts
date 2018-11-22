// let obsidian={
//     name:"李瑞轩",
//     website:'alphalrx.cn',
//     age:19,
//     saySomething:function () {
//         console.log("!!!")
//     }
// }
// console.log(obsidian.saySomething())

// let arr1:number[]
// let arr2:Array<string>
//数组
//字面量赋值法
let arr1: number[] = []
let arr2: number[] = [1, 2, 3, 4, 5]
let arr3: Array<string> = ['obsidian', '李瑞轩']
let arr4: Array<boolean> = [true, false, false]
//构造函数赋值法
let arr5: number[] = new Array()
let arr6: number[] = new Array(1, 2, 3, 4, 5)
let arr7: Array<string> = new Array('obsidan', '李瑞轩')
let arr8: Array<boolean> = new Array(true, false, false)

//元组类型
let arr0: [string, number]
arr0 = ['hello', 10]
// arr0 = [10, 'hello'] 错
