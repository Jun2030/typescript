var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
 * @Project: Do not edit
 * @Author: Zi_Jun
 * @Email: zijun2030@gmail.com
 * @Date: 2019-10-28 11:41:13
 * @LastEditTime: 2019-11-15 15:04:34
 * @LastEditors: Do not edit
 * @Note: Do not edit
 */
// demo.ts
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.eat = function () {
        console.log("eat");
    };
    return Person;
}());
var A = /** @class */ (function (_super) {
    __extends(A, _super);
    function A() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    A.prototype.eat = function () {
        console.log("A eat");
    };
    return A;
}(Person));
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.eat = function () {
        console.log("B eat");
    };
    return B;
}(Person));
var a = new A();
a.eat();
var b = new B();
b.eat();
