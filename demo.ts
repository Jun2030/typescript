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
class Person {
  public eat() {
    console.log("eat");
  }
}

class A extends Person {
  public eat() {
    console.log("A eat");
  }
}

class B extends Person {
  public eat() {
    console.log("B eat");
  }
}

let a = new A();
a.eat();
let b = new B();
b.eat();
