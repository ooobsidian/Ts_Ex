"use strict";
var age = 18;
var people;
(function (people) {
    people["nan"] = "\u7537";
    people["nv"] = "\u5973";
    people["yao"] = "\u5996";
})(people || (people = {}));
console.log(people.nv);
var t = 10;
t = "obsidian";
t = true;
t = "123";
console.log(t);
