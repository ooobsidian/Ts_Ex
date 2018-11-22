"use strict";
//构造函数声明
var reg1 = new RegExp('obsidian');
console.log(reg1);
var reg2 = new RegExp('obsidian', 'gim');
console.log(reg2);
//字面量声明
var reg3 = /obsidian/i;
var reg4 = /obsidian/gim;
//test()
var reg5 = /obsidian/i;
var web = 'alphaobsidianlrx.cn';
var result1 = reg1.test(web);
console.log(result1);
//exec()
console.log(reg1.exec(web).index);
