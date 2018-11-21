"use strict";
//固定参数
// function search(age:number):string{
//     return "找到了"+age+"岁的小姐姐"
//}
//可选参数
// function search(age:number,stature?:string):string{
//     let yy:string=''
//     yy='找到了'+age+"岁"
//     if(stature!==null){
//         yy+=stature
//     }
//     return yy+'的小姐姐'
// }
// var age:number=23
// var result:string=search(age,"美丽")
// console.log(result)
//有默认参数
// function search(age:number=18,stature:string="小蛮腰"):string{
//     let yy:string=''
//     yy='找到了'+age+"岁"
//     if(stature!==null){
//         yy+=stature
//     }
//     return yy+'的小姐姐'
// }
// var result:string=search()
// console.log(result)
//有剩余参数的函数
function search() {
    var xuqiu = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        xuqiu[_i] = arguments[_i];
    }
    var yy = '找到了';
    for (var i = 0; i < xuqiu.length; i++) {
        yy += xuqiu[i];
        if (i < xuqiu.length - 1) {
            yy += '、';
        }
    }
    yy += '的小姐姐';
    return yy;
}
var result = search('22岁', '大长腿', '瓜子脸');
console.log(result);
