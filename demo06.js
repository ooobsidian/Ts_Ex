"use strict";
//不传递参数
var date = new Date();
console.log(date);
//传递一个整数
var date1 = new Date(1000); //开始日期是1970-01-01 00:00:00 往前传递毫秒数
var date2 = new Date(2000); //开始日期是1970-01-01 00:00:00
console.log(date1, date2);
//传递一个字符串
var date3 = new Date('1234/02/02 11:11:11');
console.log(date3);
