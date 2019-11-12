// demo.ts
var student = function (name, age) {
    var others = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        others[_i - 2] = arguments[_i];
    }
    return "\u6211\u662F" + name + "," + age + "\u5C81";
};
var student1 = student("小明", 16);
var student2 = student("小红", 20, "女");
console.log(student1); // => 我是小明,16岁,性别男
console.log(student2); // => 我是小红,20岁,性别女
