"use strict";
var XiaoJieJie = (function () {
    function XiaoJieJie(name, age) {
        this.name = name;
        this.age = age;
    }
    XiaoJieJie.prototype.saySomething = function () {
        console.log('小哥哥好！');
    };
    return XiaoJieJie;
}());
var xjj = new XiaoJieJie('李瑞轩', 19);
console.log(xjj);
xjj.saySomething();
