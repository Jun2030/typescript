### 介绍

TypeScript是JavaScript的一个超集，主要提供了类型系统和对ES6的支持，由Microsoft开发。

**应用**：vue3.0, angular2.0, vscode…

**特点**：

1. 编译型语言：编译为js后运行，单独无法运行
2. 强类型语言
3. 面向对象的语言

**优势**：

1. 类型系统实际上是最好的文档，大部门的函数看看类型的定义就可以知道如何使用；
2. 可以在编译阶段就发现大部分错误，这总比在运行时候出错要好；
3. 增强了编辑器和IDE的功能，包括代码补全、接口提示、跳转到定义、重构等

**总结**：TypeScript增加了代码的可读性和可维护性

**学习视频地址**：https://pan.baidu.com/s/17dfqnomRSBO99xiIUo_BUg 提取码：h099



### 安装

需要有node环境，通过npm安装：

```powershell
npm install typescript -g
```

**编码**：

使用`.ts`文件扩展名。

**编译**：

+ 使用`tsc`命令可编译`.ts`文件，生成一个同名为`.js`文件；
+ 编译的时候即使报错了，还是会生成编译结果（`.js`）



```typescript
// demo.ts
function sayHello(person: string) {
  return `Hello, ${person}`;
}

let user = "Tom";
console.log(sayHello(user));
```

使用`tsc demo.ts`,生成一个同名的demo.js文件：

```javascript
// demo.js
function sayHello(person) {
    return "Hello, " + person;
}
var user = "Tom";
console.log(sayHello(user));
```



### 基础类型

+ 字符串-string
+ 数字-number
+ 布尔值-boolean
+ 空值-void
+ null和undefined
+ 任意值-any
+ 数组
+ 元组Tuple
+ 枚举-enum
+ never
+ symbol
+ object



**定义string类型**：

```typescript
// chapter3.ts
let a: string;
a = "Tom";
```

**定义number类型**：

```typescript
// chatper3.ts
let b: number = 1;
b = 2;
```

**定义boolean类型**：

```typescript
// chapter3.ts
let c: boolean = false;
c = true;
```

**定义void类型**：

```typescript
// chapter3.ts
let d: void = null;
```

**定义null和undefined类型**：

```typescript
// chapter3.ts
let e: null = null;
let f: undefined = undefined;
```

**定义any类型**：

```typescript
// chapter3.ts
let g: any = "seven";
g = 7;
```

**定义数组**：

```typescript
// chapter3.ts
let h: number[] = [1, 2, 3];
let i: Array<number> = [4, 5, 6];
```

**定义元组**：

```typescript
// chapter3.ts
let j: [string, number] = ["hello", 20];
j[0] = "hi";
j[1] = 10;
```

**定义enum**：

```typescript
// chatper3.ts
enum k {
  a,
  b = 3,
  c
}
console.log(k["a"]); // => 0
console.log(k[1]); // => undefined
console.log(k.c); // => 4
```

**定义never**:

```typescript
// chapter3.ts
function error(msg: string): never {
  throw new Error(msg);
}
```

**定义symbol**:

```typescript
// chapter3.ts
let l = Symbol();
```

**定义object**:

```typescript
// chapter3.ts
let m: Date = new Date();
```



### Let、Const区别

TypeScript和JavaScript类型，其var、let、const的区别基本一致，以下主要讲解ES6中他们的区别

**var**:

ES5中只有全局作用域和函数作用域。`var`就是函数作用域。

**let**:

ES6中新增了块级作用域的概念。`let`和`const`。

**const**:

和`let`的作用域一致，不同的是`cont`定义的是常量，一旦定义，不可改变。

**函数作用域 vs 块级作用域**：

```javascript
// chapter4.js
var sum: number = 0;
for (var i = 0; i < 3; i++) {
  sum += i;
}
console.log(sum); // => 3
console.log(i); // => 3 函数作用域
```

```javascript
// chapter4.js
let sum: number = 0;
for (let i = 0; i < 3; i++) { // 块级作用域
  sum += i;
}
console.log(sum); // => 3
console.log(i); // !error
```

**变量提升 vs 暂时性死区**：

```javascript
// chapter4.js
console.log(a); // => undefined
var a = 1;
```

```javascript
// chapter4.js
console.log(a); // !error
let a = 1;
```

**重复声明 vs 不允许重复声明**：

```javascript
// chapter4.js
var a = 1;
var a = 2;
```

```javascript
// chapter4.js
let a = 1;
let a = 2; // !error
```

**全局变量 vs 全局对象的属性**：

```javascript
// chapter4.js
var a = 1;
console.log(window.a); // => 1
console.log(this.a); // => 1
```

```javascript
// chapter4.js
let a = 1;
console.log(window.a); // => undefined
console.log(this.a); // => undefined
```



###  数组

**数组有两种定义方式**：

1. 类型 +方括号（type[]）: 这种方式定义的数组项中不允许出现其他的类型

   ```typescript
   // chapter5.ts
   let list: number[] = [1, 2, 3];
   ```

2. 数组泛型（Array<type>）:

   ```typescript
   // chapter5.ts
   let list: Array<string> = ['a', 'b', 'c'];
   ```


数组类型表示已知元素数量和类型的集合，各元素的类型必须相同。但是很多情况并非如此，比如需要集合中有多种类型的元素，TypeScript中称之为元组Tuple。



### 元组(tuple)

**定义元组**：

```typescript
// chapter6.ts
let tuple: [string, string, number] = ["a", "b", 3];
console.log(tuple[2]); // => 3
```

**特点**：

1. 当访问一个已知索引的元素，会返回正确的类型
2. 越界元素，当访问超出元组长度的元素时，它的类型会被限制为元组中每个类型的联合类型

```typescript
// chapter6.ts
let tuple: [string, string, boolean] = ["x", "y", false];
let m = tuple[2];
console.log(m); // => false
tuple[3] = "hello"; // !error TypeScript2.7+不能越界访问
```



### 枚举-enum

枚举类型用于取值被限定在一定范围内的场景，如一周只有7天，一年只有4季等。

**枚举初始化**：

可以理解为枚举成员赋值。每个枚举成员都需要带有一个值，在未赋值的情况下，枚举成员会被赋值为从0开始，不长为1递增的数字，同时枚举名和值也会进行反向映射：

```typescript
// chapter7.ts
enum Weeks {
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
  Sun
}
console.log(Weeks["Mon"]); // => 0
console.log(Weeks[0]); // => Mon
console.log(Weeks.Thu); // => 3
```

以上会被编译为：

```javascript
let Weeks = {0: "Mon", 1: "Tue", 2: "Wed", 3: "Thu", 4: "Fri", 5: "Sat", 6: "Sun",
             Mon: 0, Tue: 1, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 7};
```

**手动赋值**：

手动赋值可以是小数或者负数，后续为赋值的项仍是递增加1

```typescript
// chapter7.ts
enum Weeks {
  Mon = -10,
  Tue,
  Wed = 0.2555,
  Thu,
  Fri,
  Sat,
  Sun
}
console.log(Weeks["Mon"]); // => -10
console.log(Weeks[0]); // => undefined
console.log(Weeks.Thu); // => 1.2555
```

**数字枚举**：

```typescript
// chapter7.ts
enum Colors {red, yellow, blur};
```

**字符串枚举**：

```typescript
// chapter7.ts
enum Direction {Up = "Up", Down = "Down", Left = "Left", Right = "Right"};
```

**常量枚举-const enum**：

常量枚举与普通枚举的区别是：它会在编译阶段被删除，并且不能包含计算成员。

```typescript
// chapter7.ts
const enum Directions {
  Up,
  Down,
  Left,
  Right
}
let directions = [
  Directions.Up,
  Directions.Down,
  Directions.Left,
  Directions.Right
];
console.log(directions); // => [0, 1, 2, 3]
```

**外部枚举-declare enum**：

外部枚举与声明语句一样，常出现在声明文件中。

`declare`定义的类型只会用于编译时的检查，编译结果中会被删除。

外部枚举的作用就是为了避免重复的问题。意思就是，如果其他的文件中定义有相同的枚举对象，为了避免相同枚举对象里定义的相同枚举名称带来的冲突，这样定义了过后，重复的名称就不能再使用了。

```typescript
// chapter7.ts
declare enum Directions {
  Up,
  Down,
  Left,
  Right
}
```

运行`tsc chapter7.ts`之后：

```javascript
// chapter7.js 
// 编译之后被删除
```

> 注意：同时使用`declare`和`const`也是可以的，编译结果同==常量枚举一致==。



### 函数-Function

函数是JavaScript应用程序的基础。

和JavaScript一样，TypeScript函数可以创建有名字的函数和匿名函数。

**TypeScript声明函数的两种方式**

1. 函数声明式
2. 函数表达式

**函数声明：**

```typescript
// demo.ts
function student(name: string, age: number): string {
  return `我是${name}, 今年${age}岁`;
}
let newStudent: string = student("子俊", 22);
console.log(newStudent); // => 我是子俊，今年22岁
```

> !如果出现了“函数实现重复”类似的错误，则需要在根目录新建一个“tsconfig.json”文件，为空可即可。

形式和JavaScript中的函数声明一样，不一样的是什么呢？

1. TS中指定了参数的类型，指定了返回值的类型（返回值类型可以省略，因为TS会根据返回语句自动推断返回值类型）
2. 参数不可多不可少，只能刚刚好，且和顺序有关

**函数表达式：**

```typescript
// demo.ts
let student: (name: string, age: number) => string = (
  name: string,
  age: number
): string => {
  return `我是${name},今年${age}岁`;
};

let newStudent = student("子俊", 22);
console.log(newStudent); // => 我是子俊,今年22岁
```

！注意：

1. 前后参数名称可以不一致

   ```typescript
   // demo.ts
   let student: (x: string, y: number) => string = (
     name: string,
     age: number
   ): string => {
     return `我是${name},今年${age}岁`;
   };
   
   let newStudent = student("子俊", 22);
   console.log(newStudent); // => 我是子俊,今年22岁
   ```

2. 声明函数是类型推论的一种

   let student: (x:string,y:number)=>string  = (name:string,age:number) => {}

   声明变量：指定函数类型 = 根据指定函数类型定义函数

3. 函数声明的返回值为空的情况,关键字`void`

   ```typescript
   // demo.ts
   let student: (x: string, y: number) => void = (
     name: string,
     age: number
   ): void => {
     console.log("不返回内容");
   };
   
   let newStudent = student("子俊", 22);
   ```

**接口中函数的定义：**

```typescript
// demo.ts
interface Student {
  (x: string, y: number): string;
}
let student1: Student;
student1 = (name: string, age: number) => {
  return `他是${name},年龄为${age}`;
};

let newStudent = student1("小明", 18);
console.log(newStudent); // => 他是小明,年龄为18
```

**可选参数：**

```typescript
// demo.ts
let student: (name: string, age: number, sex?: string) => string = (
  name: string,
  age: number,
  sex?: string
) => {
  return `我是${name},${age}岁${sex ? ",性别" + sex : ""}`;
};

let student1 = student("小明", 16);
let student2 = student("小红", 20, "女");
console.log(student1); // => 我是小明,16岁
console.log(student2); // => 我是小红,20岁，性别女
```

**默认参数：**

```typescript
// demo.ts
let student: (name: string, age: number, sex?: string) => string = (
  name: string,
  age: number,
  sex = "男"
) => {
  return `我是${name},${age}岁${sex ? ",性别" + sex : ""}`;
};

let student1 = student("小明", 16);
let student2 = student("小红", 20, "女");
console.log(student1); // => 我是小明,16岁,性别男
console.log(student2); // => 我是小红,20岁,性别女
```

**剩余参数：**

在JavaScript中，可以使用arguments来访问所有传入的参数，在TypeScript中，可以把所有参数搜集到一个变量。

```typescript
// demo.ts
let student: (name: string, age: number, ...others: Array<string>) => string = (
  name: string,
  age: number,
  ...others: string[]
) => {
  return `我是${name},${age}岁`;
};

let student1 = student("小明", 16);
let student2 = student("小红", 20, "女");
console.log(student1); // => 我是小明,16岁
console.log(student2); // => 我是小红,20岁
```

**函数重载：**

重载是为同一个函数提供多个类型提供多个函数类型定义，允许函数对传入不同的参数返回不同的结果分别做类型检查，比如实现一个数字或字符串的反转函数：

```typescript
// demo.ts
function reverse(text: number): number;
function reverse(text: string): string;
function reverse(text: number | string): number | string {
  if (typeof text === "string") {
    return text
      .split("")
      .reverse()
      .join("");
  } else if (typeof text === "number") {
    return +text
      .toString()
      .split("")
      .reverse()
      .join("");
  }
}
```

重复定义多次函数`reverse`，前几次都是函数定义，最后一次是函数实现。

TypeScript与JavaScript的处理流程相似，它会查找重载列表，从第一个重载定义开始匹配，如果匹配的话就使用这个定义，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。



### 类

**相关概念**

+ 类（class）: 定义了一件事物的抽象特性，包含它的属性和方法
+ 对象（Object）: 类的实例，通过`new`生成
+ 面向对象（OPP）的三大特性： 封装、继承、多态
+ 封装（Encapsulation）：将对数据的操作细节隐藏起来，只暴露对外的接口。外界调用端不需要（也不可能）知道细节，就能通过对外提供的接口来访问该对象，同时也保证了外界无法任意更改对象内部的数据
+ 继承（Inheritance）：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
+ 多态（Polymorphism）：由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。比如`Cat`和`Dog`都继承自`Animal`，但是分别实现了自己的`eat`方法，程序会自动判断出来应该如何执行`eat`
+ 存取器（getter&setter）: 用以改变属性的读取和赋值行为
+ 修饰符（Modifiers）：修饰符是一些关键字，用于限定成员或类型的性质。比如`publick`表示公有属性或方法
+ 抽象类（Abstract Class）：抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
+ 接口(interfaces)：不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现（implements）。一个类只能继承自另一类，但是可以实现多个接口

**类的定义：**

使用`class`定义类，使用`constructor`定义构造函数。

通过`new`关键字生成新实例的时候，会自动调用构造函数。

```typescript
// demo.ts
// 定义类
class Animal {
  // 定义属性
  name: string;
  // 构造函数，属性赋值
  constructor(name) {
    this.name = name;
  }
  // 定义方法
  sayHello() {
    return `我的名字是${this.name}`;
  }
}

let cat = new Animal("小明");
console.log(cat.name); // => 小明
console.log(cat.sayHello()); // => 我的名字是小明
```

**类的继承：**

使用`extends`关键字实现继承，子类中使用`super`关键字来调用父类的构造函数和方法

```typescript
// demo.ts
// 定义类
class Animal {
  // 定义属性
  name: string;
  // 构造函数，属性赋值
  constructor(name) {
    this.name = name;
  }
  // 定义方法
  sayHello() {
    return `我的名字是${this.name}`;
  }
}

// 继承类
class Cat extends Animal {
  color: string;
  constructor(name, color) {
    super(name); // 调用父类Animal的constructor(name);
    this.color = color;
  }
  sayCatHello() {
    // 调用父类的 sayHello()
    return `${super.sayHello()},我是一只${this.color}的猫`;
  }
}

let cat1 = new Cat("小明", "红色");
console.log(cat1.name); // => 小明
console.log(cat1.color); // => 红色
console.log(cat1.sayHello()); // => 我的名字是小明
console.log(cat1.sayCatHello()); // => 我的名字是小明,我是一只红色的猫
```

**存取器：**

使用`getter`和`setter`可以改变属性的赋值和读取行为

```typescript
// demo.ts
// 定义类
class Animal {
  // 定义属性
  name: string;
  constructor(name) {
    this.name = name;
  }
  // get
  get userName(): string {
    return this.name;
  }
  // set
  set userName(newName: string) {
    this.name = `我是${newName}`;
  }
}

let animal = new Animal("小红");
console.log(animal.name); // => 小红
animal.userName = "小白";
console.log(animal.userName); // => 我是小白
console.log(animal.name); // => 我是小白
```

> 如果出现了`错误:(17, 7) TS1056: Accessors are only available when targeting ECMAScript 5 and higher.`：则需要在tsconfig.json中配置：
>
> ```json
> // tsconfig.json
> {
> "compilerOptions": {
>  "target": "es5"
> },
> "include": ["*.ts"]
> }
> ```
> 如果运行还报错，可使用`tsc -t`查看当前使用es的版本，可以使用运行
>
> ```shell
> tsc --target es2016 demo.ts
> ```

**实例属性和方法：**

ES6中实例的属性只能通过构造函数中的`this.xxx`来定义：

```typescript
// demo.js
class Animal {
  constructor() {
    this.name = "小红";
  }
  eat() {}
}

let cat = new Animal();
console.log(cat.name); // => 小红
```

ES7提案中可以直接在类里面定义：

```typescript
// demo.ts
// 定义类
class Animal {
  name = "小白";
  eat() {}
}

let cat = new Animal();
console.log(cat.name); // => 小白
```

**静态属性和方法：**

`static`定义一个静态属性或方法。静态属性和方法不需要实例化，而是直接通过类来调用。

```typescript
// demo.ts
// 定义类
class Animal {
  // 静态属性
  static num: number = 100;
  // 静态方法
  static isAnimal(name: string) {
    return `我是${name}`;
  }
}
// 类的静态属性和方法都不需要实例化,直接通过类调用
console.log(Animal.num); // => 100
console.log(Animal.isAnimal("小明")); // => 我是小明
```

**访问修饰符：**

+ **public** 公有属性和方法，可以在任何地方被访问到，默认所有的属性和方法都是`public`的
+ **private** 私有属性或方法，不能再声明它的类的外部访问，也不可以在子类中访问
+ **protected** 受保护的属性和方法，它和`private`类型，区别是它可以在子类中方法

```typescript
// demo.ts
// 定义类
class Person {
  // 公有属性
  public name: string;
  // 私有属性
  private idCard: number;
  // 受保护属性
  protected phone: number;
  // 构造方法
  constructor(name: string, idCard: number, phone: number) {
    this.name = name;
    this.idCard = idCard;
    this.phone = phone;
  }
}

let jack = new Person("Jack", 10000, 123456);
console.log(jack.name); // => Jack
// console.log(jack.idCard); // !! 属性“idCard”为私有属性，只能在类“Person”中访问。
// console.log(jack.phone); // !! 属性“phone”受保护，只能在类“Person”及其子类中访问。

class Teacher extends Person {
  childPhone: number;
  constructor(name: string, idCard: number, phone: number) {
    super(name, idCard, phone);
    this.childPhone = phone;
    console.log(this.name); // => Tom
    // console.log(this.idCard); // !! 属性“idCard”为私有属性，只能在类“Person”中访问。
    console.log(this.phone); // => 234567
  }
}

let tom = new Teacher("Tom", 20000, 234567);
console.log(tom.name); // => Tom
// console.log(tom.idCard); // !! 属性“idCard”为私有属性，只能在类“Person”中访问。
// console.log(tom.phone); // !! 属性“phone”受保护，只能在类“Person”及其子类中访问。
console.log(tom.childPhone); // => 234567
```

**多态：**

同一个父类的多个子类，可以有不同结果的同名方法

```typescript
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
a.eat(); // => A eat
let b = new B();
b.eat(); // => B eat
```

