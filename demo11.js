"use strict";
var shuaiGe;
(function (shuaiGe) {
    var DeHua = (function () {
        function DeHua() {
            this.name = '刘德华';
        }
        DeHua.prototype.talk = function () {
            console.log('我是大帅哥刘德华！');
        };
        return DeHua;
    }());
    shuaiGe.DeHua = DeHua;
})(shuaiGe || (shuaiGe = {}));
var baJie;
(function (baJie) {
    var DeHua = (function () {
        function DeHua() {
            this.name = '马德华';
        }
        DeHua.prototype.talk = function () {
            console.log('我是二师兄马德华！');
        };
        return DeHua;
    }());
    baJie.DeHua = DeHua;
})(baJie || (baJie = {}));
var dehua1 = new shuaiGe.DeHua();
var dehua2 = new baJie.DeHua();
dehua1.talk();
dehua2.talk();
