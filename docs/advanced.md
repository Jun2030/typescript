### 类型别名

类型别名用来给一个类型起一个新的名字。

+ 常用于联合类型
+ `type` 创建类型别名

```typescript
type Str = string;
type Num = number;
type StrAndNum = string | number;
function getInput(n: StrAndNum): string {
  if (typeof n === 'string') {
    return n;
  } else {
    return n.toString();
  }
}

console.log(getInput("1")); // => "1"
console.log(getInput(1)); // => "1"
```



### 字符串字面量类型

* 字符串字面量类型用来约束取值只能是某几个字符串中的一个

* 类型别名与字符串字面量类型都是使用 `type` 进行定义

```typescript
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
    // Do something
}
handleEvent(document.getElementById('hello'), 'scorll');
```



### 元组

数组合并了相同类型的对象，而元组（`Tuple`）合并了不同类型的对象。

+ 可以赋值和访问一个已知的索引元素
+ 直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中定义的项
+ 添加越界元素（非元组中的任意类型）时，会报错

```typescript
let me: [string, number, number];
me = ["devin", 20, 180];
console.log(me); // => ["devin", 20, 180]
```



### 枚举

枚举（`Enum`）类型用于取值被限定在一定范围内的场景，比如一周只能有7天，颜色限定为红绿蓝等。

+ 枚举成员默认会被赋值从 `0` 开始递增的数字，同时也会对枚举值到枚举名进行反向映射
+ 如果手动赋值（数字，小数，非数字），未手动赋值的枚举项会接着上一个枚举项递增，如果出现重复，则会后者覆盖前者
+ 枚举项有两种类型：常数项和计算所得项，计算所得

```typescript
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
console.log(Days["Sun"]); // => 0
console.log(Days["3"]); // => "wed"
```

!> 手动赋值的枚举项可以不是数字，此时需要使用类型断言来让 `TypeScript` 无视类型检测，比如： `enum Colors {red, green, yellow = <any>"Y"};`

##### 常数枚举

* 常数枚举是使用 `const enum` 定义枚举类型

* 常数枚举与普通枚举的区别是，它会在编译阶段被删除

* 常数枚举不能包含计算所得项

  ```typescript
  const enum Colors {Red, Green, Yellow};
  let myLoveColor = Colors["Green"];
  console.log(myLoveColor); // => 1
  ```

##### 外部枚举

+ 外部枚举是使用 `declare enum` 定义枚举类型
+ 外部枚举只会用于编译时的检查，编译结果中被删除
+ 外部枚举与非外部枚举的区别在于：非外部枚举，没有初始化方法的成员被当做常数成员。而外部枚举，没有初始化方法的成员会被当做需要经过计算的



### 类

在ES6之前，JavaScript通过构造函数实现类的概念，通过原型链实现继承。在ES6+中，`class` 实现类。

##### 类相关名词介绍

+ 类（Class）: 定义了一件事物的抽线特点，包含它的属性和方法
+ 对象（Object）: 类的实例，通过 `new` 生成
+ 面向对象（OOP）的三大特性: 封装、继承、多态
+ 封装（Encapsulation）: 将对数据的操作细节隐藏起来，之暴露对外的接口。外界调用端不需要（也不可能）知道细节，就能通过对外提供的接口来访问该对象，同时也保证了外界无法任意更改对象内部的数据
+ 继承（Inheritance）: 子类继承父类，子类除了拥有父级的所有特性外，还有一些更具体的特性
+ 多态（Polymorphism）: 由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。比如 `Cat` 和 `Dog` 都继承自 `Animal`,但是分别实现了自己的 `eat` 方法。此时针对某一个实例，我们无需了解它是 `Cat` 还是 `Dog` ,就可以直接调用 `eat` 方法，程序会自动判断出来应该如何执行 `eat`
+ 存取器（getter & setter）: 用来改变属性的读取和赋值行为
+ 修饰器（Modifiers）: 修饰符是一些关键字，用于限定成员或类型的性质。比如 `public` 表示公有属性或方法
+ 抽象类（Abstract Class）: 抽象类是提供他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
+ 接口（Interfaces）: 不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现（implements）。一个类只能继承自另一个类，但是可以实现多个接口

##### ES6中类的用法

**属性和方法**

使用 `class` 定义类，使用 `constructor` 定义构造函数。通过 `new` 生成新实例的时候，会自动调用构造函数。

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return `My name is ${this.name}`;
    }
}

let a = new Animal("Jack");
console.log(a.sayHi()); // => My name is Jack
```

**类的继承**

使用 `extends` 关键字实现继承，子类中使用 `super` 关键字来调用父类的构造函数和方法。

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return `My name is ${this.name}`;
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name); // 调用父类的 constructor(name)
        console.log(this.name);
    }
    sayHi() {
        return 'Hello,' + super.sayHi(); // 调用父类的 sayHi()
    }
}

let b = new Cat("Tom"); // => Tom
console.log(c.sayHi()); // => Hello, My name is Tom
```

**存取器**

使用 `getter` 和 `setter` 可以改变属性的赋值和读取行为：

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return 'Jack';
    }
    set name(value) {
        console.log("setter: " + value);
    }
}
let a = new Animal("Kitty"); // setter: Kitty
a.name = "Tom"; // setter: Tom
console.log(a.name); // => Jack
```

**静态方法**

使用 `static` 修饰符修饰的方法称为静态方法，他们不需要实例化，而是直接通过类来调用：

```javascript
class Animal {
    static isAnimal(a) {
        return a instanceof Animal;
    }
}

let a = new Animal('Jack');

Animal.isAnimal(a); // true 直接通过类来调用
a.isAnimal(a); // !!error
```

##### ES7中类的用法

**实例属性**

ES6中实例的属性只能通过构造函数中的 `this.xxx` 来定义，ES7 中可以直接在类里面定义：

```javascript
class Animal {
    name: "Jack";
	constructor() {
        // ...
    }
}

let a = new Animal();
console.log(a.name); // => Jack
```

**静态属性**

ES7中，可以使用 `static` 定义一个静态属性：

```javascript
class Animal {
    static num = 10;
	constructor() {
        // ...
    }
}

console.log(Animal.num); // => 10
```

##### TypeScript中类的用法

**`public` `private` 和 `protected`**

`Typescript` 可以使用三种访问修饰符（Access Modifiers）,分别为：

+ `public`: 修饰的属性和方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 `public`的
+ `private`: 修饰的属性和方法是私有的，不能在声明它的类的外部访问
+ `protected`: 修饰的属性和方法是受保护的，它和 `private` 类似，区别是它在子类中也是允许被访问的

```typescript
class Animal {
  public name;
  private age;
  public constructor(name,age) {
    this.name = name;
    this.age = age;
  }
}

let a = new Animal("Jack", 10);
console.log(a.name); // => Jack
console.log(a.age); // !!error
```

注意：

1. 当构造函数修饰为 `private` 时，该类不允许被继承或者实例化
2. 当构造函数修饰为 `protected`时，该类只允许被继承

**参数属性**

修饰符和 `readonly` 还可以使用在构造参数中，等同于类中定义该属性同时给属性赋值，使代码更简洁。

```typescript
class Animal {
  // publick name: string;
  public constructor(public name) {
    this.name = name;
  }
}

let a = new Animal("Jack");
console.log(a.name); // => Jack
```

**readonly**

只读属性关键字，只允许出现在属性声明或索引签名或构造函数中，如果 `readonly` 和其他访问修饰符同时存在的话，需要写在其他访问修饰符的后面。

```typescript
class Animal {
  // publick readonly name;
  public constructor(public readonly name) {
    this.name = name;
  }
}

let a = new Animal("Jack");
console.log(a.name); // => Jack
a.name = "Tom"; // !!error
```

**抽象类**

`abstract` 用于定义抽象类和其中的抽象方法。

+ 抽象类是不允许是实例化的
+ 抽象类中的抽象方法必须被子类实现

```typescript
abstract class Animal {
  public constructor(public name) {
    this.name = name;
  }
  public abstract sayHi();
}

class Cat extends Animal {
  public sayHi() {
    console.log(`Hello, My name is ${this.name}`);
  }
}

let cat = new Cat("Tom");
cat.sayHi(); // => Hello, My name is Tom
```

**类的类型**

给类加上 TypeScript 的类型很简单，与接口类似；

```typescript
class Animal {
  constructor(public name: string) {
    this.name = name;
  }
  sayHi(): string {
    return `My name is ${this.name}`;
  }
}

let a: Animal = new Animal("Jack");
console.log(a.sayHi()); // => My name is Jack
```



### 类与接口

##### 类实现接口

实现（implements）是面向对象中一个重要的概念。一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，这时候就可以把共有特性提取成接口（interfaces），用 `implements` 关键字来实现。

举例：门是一个类，防盗门是门的子类。防盗门有一个报警器的功能。这个时候有另一个类，车，也有报警器的功能。这是可以把报警器提取出来，作为一个接口，防盗门和车都去实现它:

```typescript
interface Alarm {
    alert(): void;
}
class Door {
    
}
class SecurityDoor extends Door implements Alarm {
    alert() {
        console.log('SecurityDoor alert');
    }
}
class Car implements Alarm {
    alert() {
        console.log('Car alert');
    }
}
```

一个类可以实现多个接口；

```typescript
interface Alarm {
  alert(): void;
}
interface Light {
  lightOn(): void;
  lightOff(): void;
}
class Car implements Alarm, Light {
  alert() {
    console.log('Car alert');
  }
  lightOn() {
    console.log('Car light on');
  }
  lightOff() {
    console.log('Car light off');
  }
}
```

##### 接口继承接口

```typescript
interface Alarm {
  alert(): void;
}
interface LightableAlarm extends Alarm{
  lightOn(): void;
  lightOff(): void;
}
```

##### 接口继承类

```typescript
class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};
```



### 泛型

泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而是在使用的时候再指定类型的一种特性。

+ `<T>` 表示泛型
+ `T` 表示具体的类型

```typescript
function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

let a = createArray<string>(3, 'a');
console.log(a); // => ['a', 'a', 'a']
let b = createArray<number>(3, 1);
console.log(b); // => [1, 1, 1]
```

**多个类型参数**

```typescript
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

console.log(swap([7, 'seven'])); // => ['seven', 7]
```

**泛型约束**

```typescript
interface Lengthwise {
  length: number;
}

function logCheck<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

let a = logCheck({length: 1}); // => 1
console.log(a); // {length: 1}
```

**泛型接口**

可以使用接口的方式来定义一个函数需要符合的形状：

```typescript
interface CreateArrayFunc<T> {
  (length: number, value: T): Array<T>;
}
let createArray: CreateArrayFunc<any>;

createArray = function<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

let a = createArray(3, 'a');
console.log(a); // => ['a', 'a', 'a']
```

**泛型类**

与泛型接口类似，泛型也可以用于类的类型定义中:

```typescript
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
```

**泛型参数的默认类型**

```typescript
function createArray<T = string>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
```



### 声明合并

如果定义了两个相同名字的函数、接口、类，那么他们会合并成一个类型。

**函数的合并**

函数的重载特性：

```typescript
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if(typeof x === 'number'){
        return Number(x.toString().split('').reverse().join(''));
    } else if(typeof x === 'string') {
        return String(x.split('').reverse().join(''));
    }
}
console.log(reverse(123)); // => 321
console.log(reverse('hello')); // => "olleh"
```

**接口和类的合并**

```typescript
interface Alarm {
    price: number;
}
interface Alarm {
    weight: number;
}
// 相当于
interface Alarm {
    price: number;
    weight: number;
}
```

!> 接口、函数和类合并的属性的类型必须是一致或者是唯一的。