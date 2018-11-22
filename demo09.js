"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Obsidian = (function () {
    function Obsidian(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    Obsidian.prototype.interest = function () {
        console.log('找小姐姐');
    };
    return Obsidian;
}());
var obadias = new Obsidian('李瑞轩', 19, 'coding');
obadias.interest();
var OOObsidian = (function (_super) {
    __extends(OOObsidian, _super);
    function OOObsidian() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xingxiang = '帅气';
        return _this;
    }
    OOObsidian.prototype.interest = function () {
        _super.prototype.interest.call(this);
        console.log('建立电商平台');
    };
    OOObsidian.prototype.zhuanQian = function () {
        console.log('一天赚了一个亿');
    };
    return OOObsidian;
}(Obsidian));
var shuai = new OOObsidian('儿子', 10, 'playing');
shuai.interest();
shuai.zhuanQian();
//typescript不能多重继承，注意 
