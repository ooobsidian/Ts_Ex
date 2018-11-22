"use strict";
var myhusband = { sex: '男', interest: '摄影,旅游' };
console.log(myhusband);
var mySearch;
mySearch = function (source, subSource) {
    var flag = source.search(subSource);
    return (flag != -1);
};
console.log(mySearch('高、富、帅、德', '帅'));
